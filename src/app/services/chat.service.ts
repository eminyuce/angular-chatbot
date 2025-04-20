import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  //private baseUrl = 'http://localhost:8080'; // Check if '/gen-ai' is part of the controller mapping or the base URL
  private baseUrl = 'http://localhost:8080/gen-ai'; // If /gen-ai is the controller's base path

  constructor() {}

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