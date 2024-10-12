import { Component } from '@angular/core';
import { RegisterUserComponent } from '../register-user/register-user.component';
import { NgIf } from '@angular/common';
import { LoginUserComponent } from '../login-user/login-user.component';
@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RegisterUserComponent,LoginUserComponent,NgIf],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})

export class AuthComponent {
  // Boolean to check if we are on the login page or not
  isLoginPage: boolean = true;

  // Toggles between login and register pages
  togglePage() {
    this.isLoginPage = !this.isLoginPage;
  }
}
