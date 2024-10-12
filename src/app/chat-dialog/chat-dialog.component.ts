import {
  Component,
  EventEmitter,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

import { NgFor } from '@angular/common';

import { ChatMessageComponent } from '../chat-message/chat-message.component';
import { ChatUserStatusComponent } from '../chat-user-status/chat-user-status.component';
import { MessageInputComponent } from '../message-input/message-input.component';

import { ChatService } from '../services/chat.service';
import { MessageData } from '../types/MessageData';

import { AuthService } from '../services/auth.service';
import { FireabaseCRUDService } from '../services/fireabase-crud.service';

import { ChatDialogMessageContent } from './chat-dialog.message.interface';
import { ChatUser } from '../types/ChatUser';
@Component({

  selector: 'app-chat-dialog',
    standalone: true,
  imports: [
    NgFor,
    MessageInputComponent,
    ChatMessageComponent,
    ChatUserStatusComponent],
  templateUrl: './chat-dialog.component.html',
  styleUrl: './chat-dialog.component.css'

})

export class ChatDialogComponent {


  constructor(
    private chatService: ChatService,
    private firebaseCrudService: FireabaseCRUDService,
    private authService: AuthService) {

  }

  channelMessageContainer: ChatDialogMessageContent[]= [];

  sendMessageToChannelAndDatabase(messageDataEmitter: any) {
    console.log(messageDataEmitter);

    const currentUser = this.authService.getCurrentUserLoggedIn();

    const user: ChatUser = currentUser;

    const newMessageData: MessageData = {
      chatMessageSenderUuid:  user.userUniqueID ,
      chatMessageContent: messageDataEmitter.content,
      chatMessageTimeSent :messageDataEmitter.sentTime,
      chatChannelUuid: 6969 ,
      chatMessageUid: Date.now() + Math.floor(Math.random() * 10000)
    }
    const displayMessageData: ChatDialogMessageContent = {
      senderName: user.name,
      avatarSrc: '',
      content: messageDataEmitter.content,
      sentTime: messageDataEmitter.sentTime,
      chatMessageUid: newMessageData.chatMessageUid,
      isUserSender: true
    };

    this.channelMessageContainer.push(displayMessageData);
    // this.chatService.sendMessage("random bullshit", newMessageData);
    // this.firebaseCrudService.addMessage(newMessageData);
  }

  trackByMessage(index: number, message: ChatDialogMessageContent): number {
    return message.chatMessageUid; // Replace 'id' with a unique identifier for each message
  }
}
