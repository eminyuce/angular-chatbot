import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; // Make sure this path is correct
import { AppComponent } from './app.component'; // Make sure this path is correct
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module'; // Make sure this path is correct
import { ReactiveFormsModule } from '@angular/forms';
import { FixedChatComponent } from './pages/fixed-chat/fixed-chat.component'; // Make sure this path is correct
import { CollapsibleChatComponent } from './pages/collapsible-chat/collapsible-chat.component'; // Make sure this path is correct
import { ChatComponent } from './components/chat/chat.component'; // Make sure this path is correct
import { HttpClientModule } from '@angular/common/http'; // Corrected import path
import { TokenInterceptor } from './services/token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FixedChatComponent,
    CollapsibleChatComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule, // Added comma
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }