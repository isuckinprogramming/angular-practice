import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { formatDistanceToNow } from 'date-fns';
import { MessengerUserAvatarComponent } from './../messenger-user-avatar/messenger-user-avatar.component';
import { NgIf } from '@angular/common';
import { ChatService } from '../services/chat.service';

import { NgFor } from '@angular/common';

@Component({
  selector: 'app-chat-message',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    MessengerUserAvatarComponent
  ],
  templateUrl: './chat-message.component.html',
  styleUrl: './chat-message.component.css'
})
export class ChatMessageComponent implements OnInit, OnDestroy {

  @Input() sentTime!: string; // Sent time as an ISO string (e.g., '2024-10-10T14:00:00Z')
  @Input() content!: string;
  @Input() sender!: string;
  @Input() channel!: string;
  @Input() senderAvatarSrc!: string;
  @Input() isUserSender!: boolean;



  timeAgo: string = '';


  private intervalId!: any;



  ngOnInit() {
    this.updateTimeAgo();

    this.intervalId = setInterval(
      () => this.updateTimeAgo(),
      60000
    );
  }

  ngOnDestroy() {
    // Clear the interval when the component is destroyed
    clearInterval(this.intervalId);
  }

  private updateTimeAgo() {
    console.log(this.sentTime);
    this.timeAgo = formatDistanceToNow(
      new Date(this.sentTime),
      { addSuffix: true });
  }
}
