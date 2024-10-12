import { Component } from '@angular/core';
import { ChatMessageComponent } from '../chat-message/chat-message.component';
import { ChatDialogComponent } from '../chat-dialog/chat-dialog.component';
import { ChatUserStatusComponent } from '../chat-user-status/chat-user-status.component';
import { ChatMessageChannelListComponent } from '../chat-message-channel-list/chat-message-channel-list.component';
import { MessageInputComponent } from '../message-input/message-input.component';
import { NgFor } from '@angular/common';
// import { ChatMessageComponent } from '../chat-message/chat-message.component';
@Component({

  selector: 'app-chat-dashboard',

  standalone: true,

  imports: [
    NgFor,
    MessageInputComponent,
    ChatMessageComponent,
    ChatMessageChannelListComponent,
    ChatUserStatusComponent,
    ChatDialogComponent
  ],

  templateUrl: './chat-dashboard.component.html',

  styleUrl: './chat-dashboard.component.css'

})

export class ChatDashboardComponent {

}
