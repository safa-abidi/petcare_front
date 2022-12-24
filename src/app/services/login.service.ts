import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000/auth/login';

  login(credentials: NgForm) {
    return this.http.post(this.url, credentials.value);
  }

  logout() {
    localStorage.removeItem('accessToken');
  }

  isLogged() {
    return !!localStorage.getItem('accessToken');
  }
}
