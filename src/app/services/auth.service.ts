import { Injectable } from '@angular/core';
import { ChatUser } from '../types/ChatUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isUserLoggedIn: boolean = false;

  private currentUser: ChatUser = {
    name: '',
    password: '',
    email: '',
    userUniqueID: 0
  };
  constructor(
    ) { }


  userLogin(
    email: string,
    password: string
  ) {

    this.isUserLoggedIn = true;

    let newLogInUser: ChatUser = {
      email: email,
      password: password,
      name: 'not yet implemented login auth feature',
      userUniqueID: 0
    };
    console.log(newLogInUser);
    this.currentUser = newLogInUser;

  }

  userRegister(
    name:string,
    email: string,
    confirmedPassword: string
  ) {
    let newRegisteredUser: ChatUser = {
      name: name,
      password: confirmedPassword,
      email: email,
      userUniqueID: Date.now() + Math.random() * 10000
    };

    this.currentUser = newRegisteredUser;
  }

  getCurrentUserLoggedIn() : ChatUser {
    return this.currentUser;
  }

  currentUserLogout() {

  }

  isUserLoggedInValid() {
    return this.isUserLoggedIn;
  }
}
