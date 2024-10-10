import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-user',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login-user.component.html',
  styleUrl: './login-user.component.css'
})

export class LoginUserComponent {

  onSubmit() {

  }
}
