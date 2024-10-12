import { Routes } from '@angular/router';

import { LoginUserComponent } from './login-user/login-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ChatDashboardComponent } from './chat-dashboard/chat-dashboard.component';

export const routes: Routes = [

  {
    path: 'login-user',
    component: LoginUserComponent
  },
  {
    path: 'register-user',
    component: RegisterUserComponent
  },
  {
    path: 'chat-dashboard',
    component: ChatDashboardComponent
  }
];
