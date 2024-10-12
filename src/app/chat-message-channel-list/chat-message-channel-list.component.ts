import { Component } from '@angular/core';
import { ChatUserStatusComponent } from '../chat-user-status/chat-user-status.component';
@Component({
  selector: 'app-chat-message-channel-list',
  standalone: true,
  imports: [
    ChatUserStatusComponent
  ],
  templateUrl: './chat-message-channel-list.component.html',
  styleUrl: './chat-message-channel-list.component.css'
})
export class ChatMessageChannelListComponent {

}
