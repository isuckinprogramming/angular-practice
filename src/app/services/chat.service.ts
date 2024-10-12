
import { Injectable } from '@angular/core';

import { MessageData } from './../types/MessageData';

import { map, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class ChatService {

  private messagesSubject:
    BehaviorSubject<MessageData[]> =
    new BehaviorSubject<MessageData[]>([]);

  public messages$:
    Observable<MessageData[]> =
    this.messagesSubject.asObservable();

  listenForMessages(channelUUID: string): void {

    const location = `/chat-message-container/${channelUUID}/chat-message-uid`;

  }

  getMessages(): Observable<MessageData[]> {
    return this.messages$;
  }

  // Add a message to the Firebase database (for the current channel)
  async sendMessage(
    channelUUID: string,
    message: MessageData
  ): Promise<void> {
    // await this.firebaseDB
    //   .list(`/chat-message-container/${channelUUID}/chat-message-uid`)
    //   .push(message);
  }
}
