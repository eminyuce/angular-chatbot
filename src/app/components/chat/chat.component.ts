import { AfterViewChecked, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { ChatService } from '../../services/chat.service';
import { ChatRole, IChatMessage } from '../../models/chat-message';
import { EventResponse } from '../../models/event-response';
import { AuthService } from 'src/app/services/auth.service';

class Message {
  text?: string;
  type: MessageType;
}

enum MessageType {
  Bot = 'bot',
  User = 'user',
  Loading = 'loading'
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('messageContainer') private messageContainer: ElementRef;
  @Input() public display: string;

  public form: UntypedFormGroup;
  public messages: Array<Message> = [];
  private canSendMessage = true;

  constructor(private formBuilder: UntypedFormBuilder, 
    private chatService: ChatService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      message: ['']
    });
    
    // Optional: preload welcome message
    // this.getBotMessage(); 
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  public onClickSendMessage(): void {
    const message = this.form.get('message').value;

    if (message && this.canSendMessage) {
      const userMessage: Message = { text: message, type: MessageType.User };
      this.messages.push(userMessage);

      this.form.get('message').setValue('');
      this.form.updateValueAndValidity();
      this.getBotMessage();
    }
  }

  createDefaultMessage(content: string,prompt: string): IChatMessage {
    return {
      id: this.generateUUID(),
      chatId: this.generateUUID(),
      userId: 'user-uuid', // Replace with actual user ID
      userName: 'User',    // Replace with actual username
      content: content,
      prompt: prompt,
      role: ChatRole.USER,
      timestamp: new Date().toISOString()
    };
  }

  private generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  
  private getBotMessage(): void {
    this.canSendMessage = false;
    const waitMessage: Message = { type: MessageType.Loading };
    this.messages.push(waitMessage);

    // Create a placeholder for the bot's full response *before* subscribing
    const botMessagePlaceholder: Message = { text: '', type: MessageType.Bot };
    let placeholderAdded = false; // Flag to track if we added the placeholder
    let botMessageIndex = -1;     // To store the index of the placeholder

    const lastUserMessage = this.messages.filter(m => m.type === MessageType.User).pop()?.text;

    if (!lastUserMessage) {
      console.warn("No user message found to send.");
      this.messages.pop(); // Remove loading message
      this.canSendMessage = true;
      return; // Exit if there's nothing to send
    }
    var chatMessage = this.createDefaultMessage("",lastUserMessage);
    this.chatService.getToolResponseStream(chatMessage).subscribe({
      next: (event: MessageEvent) => {
        const response: EventResponse = event.data;
        // --- Action on receiving data chunk ---
        console.log('Stream event received:', event);
        const chunk = response.content; // Assuming backend sends string chunks

        // 1. Remove Loading & Add Placeholder (only on the first chunk)
        if (!placeholderAdded) {
          const loadingIndex = this.messages.findIndex(m => m.type === MessageType.Loading);
          if (loadingIndex !== -1) {
            this.messages.splice(loadingIndex, 1); // Remove loading
          }
          this.messages.push(botMessagePlaceholder); // Add the empty bot message bubble
          botMessageIndex = this.messages.length - 1; // Get its index
          placeholderAdded = true;
        }

        // 2. Append data chunk to the placeholder message
        if (botMessageIndex !== -1 && this.messages[botMessageIndex]) {
           // Ensure text is initialized
           this.messages[botMessageIndex].text = (this.messages[botMessageIndex].text || '') + chunk;
        } else if (placeholderAdded) {
           console.error("Error: Bot message placeholder was added but cannot be found.");
           // Fallback: create a new message? Might lead to multiple bubbles.
           // const fallbackMsg: Message = { text: chunk, type: MessageType.Bot };
           // this.messages.push(fallbackMsg);
        }
        // Do NOT re-enable sending here - wait for complete/error
      },
      error: (error) => {
        // --- Action on stream error ---
        console.error('Error from backend stream:', error);
        // Remove loading message if it's still there
        const loadingIndex = this.messages.findIndex(m => m.type === MessageType.Loading);
        if (loadingIndex !== -1) {
          this.messages.splice(loadingIndex, 1);
        }
        // Add a distinct error message bubble
        const errorMessage: Message = { text: 'Sorry, an error occurred while getting the response.', type: MessageType.Bot };
        this.messages.push(errorMessage);
        this.canSendMessage = true; // Allow sending again after error
      },
      complete: () => {
        // --- Action on stream completion ---
        console.log('Stream completed successfully.');
        // Ensure loading is removed (safety check)
        if (!placeholderAdded) {
           const loadingIndex = this.messages.findIndex(m => m.type === MessageType.Loading);
           if (loadingIndex !== -1) {
              this.messages.splice(loadingIndex, 1); // Remove loading
           }
           // If the stream completed *without sending any data*
           if (botMessageIndex === -1) {
               const noDataMsg: Message = { text: "[No response received]", type: MessageType.Bot };
               this.messages.push(noDataMsg);
           }
        }
        // If placeholder was added but remains empty after completion
        else if (botMessageIndex !== -1 && this.messages[botMessageIndex]?.text === '') {
             console.warn("Stream completed but no text content received.");
             this.messages[botMessageIndex].text = "[Empty response]";
        }

        this.canSendMessage = true; // IMPORTANT: Allow sending ONLY when stream is fully complete
      }
    });
 }

  public onClickEnter(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.onClickSendMessage();
    }
  }

  private scrollToBottom(): void {
    try {
      this.messageContainer.nativeElement.scrollTop = this.messageContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.warn('Failed to scroll:', err);
    }
  }
}
