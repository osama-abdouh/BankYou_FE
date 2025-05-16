import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './register/user.model';    
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth/register';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient) {
    // Inizializza lo stato di autenticazione da localStorage
    const authStatus = localStorage.getItem('isAuthenticated');
    this.isAuthenticatedSubject.next(authStatus === 'true');
  }

   register(user: User): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }
  
  login() {
    localStorage.setItem('isAuthenticated', 'true');
    this.isAuthenticatedSubject.next(true);
  }

  logout() {
    localStorage.removeItem('isAuthenticated');
    this.isAuthenticatedSubject.next(false);
  }
  isAuthenticated(): boolean {
    return localStorage.getItem('isAuthenticated') === 'true';
  }
}