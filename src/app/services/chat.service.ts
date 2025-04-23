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
    const token = this.authService.getToken();
  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'text/event-stream', // or 'text/event-stream' if supported
      'Authorization': `Bearer ${token}`
    });
  
    return new Observable<MessageEvent>((observer) => {
      this.http.post(`${this.baseUrl}/ask-ai-stream`, chatMessage, {
        headers: headers,
        responseType: 'text'
      }).subscribe({
        next: (response: string) => {
          // Simulate stream-like parsing from a full text response
          const lines = response.split('\n\n');
  
          for (const line of lines) {
            if (line.trim()) {
              try {
                const data = line.split('\n').find(l => l.startsWith('data:'))?.substring(5).trim();
                if (data) {
                  const parsed: EventResponse = JSON.parse(data);
                  const event = new MessageEvent('message', { data: parsed });
                  observer.next(event);
                }
              } catch (err) {
                console.error('Failed to parse SSE chunk:', err);
              }
            }
          }
  
          observer.complete();
        },
        error: (err) => {
          observer.error(err);
        }
      });
  
      return () => {
        console.log('Unsubscribed from stream');
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