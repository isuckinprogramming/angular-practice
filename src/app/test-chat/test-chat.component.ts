import { Component, OnInit } from '@angular/core';
import Pusher from 'pusher-js';

@Component({
  selector: 'app-test-chat',
  templateUrl: './test-chat.component.html',
  styleUrl: './test-chat.component.css',


})
export class TestChatComponent implements OnInit{

  title:string = 'angular-practice';
  messageContainer: any = [];
  username: string = "";

  ngOnInit(): void {
    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;

    const pusher = new Pusher('a4eecc40c3a4c62af0b2', {
      cluster: 'ap1'
    });

    const channel = pusher.subscribe('my-channel');
    const sendMessage = ( data: any) => {
      console.log(data);

      this.messageContainer.push(data);

    };

    channel.bind('message',sendMessage );

  }
}
