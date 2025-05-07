import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private loggedIn = false;

  constructor() { }

  isLoggedIn():boolean {
    return this.loggedIn;
  }

  logIn(){
    this.loggedIn = true
  }

  logOut(){
    this.loggedIn = false;
  }

}
