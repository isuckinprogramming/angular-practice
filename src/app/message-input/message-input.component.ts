import {
  Component,
  Output,
  EventEmitter
} from '@angular/core';


import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-message-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './message-input.component.html',
  styleUrl: './message-input.component.css'
})

export class MessageInputComponent {

  @Output() messageDataEmitter = new EventEmitter<any>();

  messageSendInput:string = "";

  sendMessage() {
    console.log(this.messageSendInput);

    if ( this.messageSendInput == "" ) {

      return;
    }


    const messageData = {

      content: this.messageSendInput,
      sentTime: new Date().toISOString()
    };

    this.messageDataEmitter.emit(messageData);
    this.messageSendInput = "";
  }
}
