import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChatRole, IChatMessage } from '../models/chat-message';
import { EventResponse } from '../models/event-response';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private baseUrl = 'http://localhost:8080/gen-ai';

  constructor(private http: HttpClient, private authService: AuthService) {}

  /**
   * Gets AI tool response using Server-Sent Events (SSE)
   */
  getToolResponseStream(chatMessage: IChatMessage): Observable<MessageEvent> {
    return new Observable<MessageEvent>((observer) => {
      // For SSE with POST requests, we need EventSource polyfill or custom implementation
      // This implementation uses fetch with SSE handling
      // const fetchUrl = `${this.baseUrl}/ask-ai-tool`;
      const fetchUrl = `${this.baseUrl}/ask-ai-stream`;

      const headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'text/event-stream',
        'Authorization': `Bearer ${this.authService.getToken()}`
      });
      
      const fetchPromise = fetch(fetchUrl, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(chatMessage),
        cache: 'no-cache'
      });
      
      fetchPromise.then(response => {
        if (!response.ok) {
          observer.error(`HTTP error! Status: ${response.status}`);
          return;
        }
        
        if (!response.body) {
          observer.error('Response body is null');
          return;
        }
        
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        
        function processStreamChunk() {
          reader.read().then(({ done, value }) => {
            if (done) {
              observer.complete();
              return;
            }
            
            const chunk = decoder.decode(value, { stream: true });
            const lines = chunk.split('\n\n');
            
            lines.forEach(line => {
              if (line.trim() !== '') {
                // Parse SSE format
                const eventData = line.split('\n')
                  .reduce((acc, part) => {
                    const colonIndex = part.indexOf(':');
                    if (colonIndex > 0) {
                      const field = part.substring(0, colonIndex).trim();
                      const value = part.substring(colonIndex + 1).trim();
                      acc[field] = value;
                    }
                    return acc;
                  }, {} as Record<string, string>);
                
                  try{
                    
                      const parsedData: EventResponse = JSON.parse(eventData.data);
                      const event = new MessageEvent(eventData.event || 'message', {
                        data: parsedData
                      });
                      
                      observer.next(event);

                  } catch (err) {
                    console.error('JSON parse error for SSE event:', err);
                  }

              }
            });
            
            processStreamChunk();
          }).catch(err => {
            observer.error(err);
          });
        }
        
        processStreamChunk();
      }).catch(err => {
        observer.error(err);
      });
      
      return () => {
        // Nothing to clean up for fetch implementation
        console.log('Stream connection closed');
      };
    });
  }

  /**
   * Alternative method using standard HTTP POST
   * Useful for non-streaming responses or when SSE is not needed
   */
  askAgent(chatMessage: IChatMessage): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    
    return this.http.post(
      `${this.baseUrl}/ask-ai-tool`, 
      chatMessage, 
      { 
        headers: headers,
        responseType: 'text', 
        reportProgress: true, 
        observe: 'events' 
      }
    );
  }


  getResponseStream(question: string): Observable<MessageEvent> {
    return new Observable<MessageEvent>((observer) => {
      // Ensure the URL is correct - verify the base path and endpoint
      const eventSource = new EventSource(`${this.baseUrl}/ask-ai-stream?prompt=${encodeURIComponent(question)}`);

      // Listener for SPECIFICALLY named 'weather' events
      eventSource.addEventListener('weather', (event) => {
        console.log('Received "weather" event:', event);
        //console.log('Data:', event.data); // Access the data payload
        observer.next(event as MessageEvent); // Cast is safe here
      });

      // Listener for any OTHER named events (if backend sends more types)
      eventSource.addEventListener('message', (event) => { // Example for 'message' event
        console.log('Received "message" event:', event);
        console.log('Data:', event.data);
        observer.next(event as MessageEvent);
      });

      // Optional: Keep onmessage for UNNAMED events (if backend might send those)
      // eventSource.onmessage = (event) => {
      //   console.log('Received unnamed event:', event);
      //   observer.next(event);
      // };

      eventSource.onerror = (err) => {
        console.error('EventSource failed:', err);
        // Don't close the source here if you want automatic reconnection (default EventSource behavior)
        // Only close if the error is fatal or you want to stop trying.
        // eventSource.close();
        observer.error(err);
      };

      eventSource.onopen = () => {
        console.log('EventSource connection opened');
      };

      // Cleanup when the Observable is unsubscribed
      return () => {
        if (eventSource.readyState !== EventSource.CLOSED) {
             eventSource.close();
             console.log('EventSource connection closed');
        }
      };
    });
  }
}