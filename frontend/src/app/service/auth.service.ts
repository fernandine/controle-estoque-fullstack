import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Role } from '../common/role';

interface User {
  username: string;
  password: string;
}

interface TokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private roles: Role[] = [];

  private readonly baseUrl = 'http://localhost:8080';
  private httpOptions = {};

  constructor(private http: HttpClient) {
    this.setHttpOptions();
  }

  private setHttpOptions() {
    const access_token = localStorage.getItem('access_token');
    if (access_token) {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${access_token}`
        })
      };
    }
  }

  login(user: User): Observable<boolean> {
    const body = new FormData();
    body.set('username', user.username);
    body.set('password', user.password);
    body.set('grant_type', 'password');
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('inventory:inventory123')
    });
    return this.http.post<TokenResponse>(`${this.baseUrl}/oauth/token`, body, { headers })
      .pipe(
        map(response => {
          if (response && response.access_token) {
            localStorage.setItem('access_token', response.access_token);
            return true;
          }
          return false;
        })
      );
  }

  logout(): void {
    localStorage.removeItem('access_token');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('access_token') !== null;
  }

  getRoles(): Role[] {
    return this.roles;
  }
}
