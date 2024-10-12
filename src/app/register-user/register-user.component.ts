import { Component } from '@angular/core';
import { RouterLink,Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent {

  registerUserEmail: string = "";

  registerUserName: string = "";

  registerUserPasswordOriginal: string = "";

  registerUserPasswordConfirmation: string = "";

  constructor(
    private router: Router
  ) {

  }

  goToLogin() {
    this.router.navigate(['login-user']);
  }


  onSubmit() {
    console.log("something is submitted for registration")
    this.router.navigate(['chat-dashboard']);
  }
}
