import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5163/api/user';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}`);
  }

  registerUser(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}`, user);
  }

  getUserByEmailAndPassword(email: string, password: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/GetUserByEmailAndPassword?email=${email}&password=${password}`);
  }
}
