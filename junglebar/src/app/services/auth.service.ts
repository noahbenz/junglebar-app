import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private signupUsers: any[] = [];

  constructor() {
    const localData = localStorage.getItem('signUpUsers');
    if(localData != null){
      this.signupUsers = JSON.parse(localData);
    }
  }

  public signUp(user: any) {
    this.signupUsers.push(user);
    localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
  }

  public login(email: string, password: string) {
    return this.signupUsers.find(user => user.email === email && user.password === password);
  }
}
