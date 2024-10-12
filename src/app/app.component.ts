import { Component, OnInit, Inject } from '@angular/core';
import { RouterOutlet,RouterLink,Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginUserComponent } from './login-user/login-user.component';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
// import { ChatDialog } from './chat/chatDialog/dialog.component';
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { AuthComponent } from './auth/auth.component';
// import { LandingPageComponent } from './landing-page/landing-page.component';
import Pusher from 'pusher-js';
// import { TestChatModule } from './test-chat/test-chat.module';
import { NgFor } from '@angular/common';
import { ChatDashboardComponent } from './chat-dashboard/chat-dashboard.component';

import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ChatDashboardComponent,
    RouterOutlet,
    ChatDialogComponent,
    LoginUserComponent,
    LandingPageComponent,
    AuthComponent,
    NgFor
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {


  }

  title = 'angular-practice';
  messageContainer: any = ["default", "default sampel"];
  username: string = "";
  message: string = "";

  ngOnInit(): void {

    if (this.authService.isUserLoggedInValid()) {
      this.router.navigate(['home-page']);
    } else {
      this.router.navigate(['login-user']);
    }
  }

}
