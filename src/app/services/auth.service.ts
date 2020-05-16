import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  // can be lazy loaded, improve performance and loading speed
  providedIn: 'root',
})
export class AuthService {
  currentUser: { name: string; age: number };

  userLoggedIn = new EventEmitter<{ name: string; age: number }>();

  constructor() {}

  logCurrentUser() {
    console.log(this.currentUser?.name || 'No logged in user');
  }
}
