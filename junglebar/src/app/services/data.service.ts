import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  signUp(user: any): Observable<any> {
    const signUpUrl = `${this.apiUrl}/signup`;
    return this.http.post(signUpUrl, user);
  }

  login(email: string, password: string): Observable<any> {
    const loginUrl = `${this.apiUrl}/login`;
    return this.http.post(loginUrl, { email, password });
  }
}
