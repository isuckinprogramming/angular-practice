
import { Component } from '@angular/core';

import { Router, RouterLink } from '@angular/router';

import { AuthService } from '../services/auth.service';

import { NgIf } from '@angular/common';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-login-user',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './login-user.component.html',
  styleUrl: './login-user.component.css'
})

export class LoginUserComponent  {

  loginForm: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],   // Email field with required and email validators
      password: ['', [Validators.required, Validators.minLength(8)]]  // Password with required and minLength validators
    });
  }

  onSubmit() {


    if (this.loginForm.valid) {
      console.log(this.loginForm.value);  // Do whatever action is needed, like submitting the form
      this.router.navigate(['chat-dashboard']);

    } else {
      console.log("Form is invalid");
    }
  }

  goToRegisterUser() {
    this.router.navigate(['register-user']);
  }
}
