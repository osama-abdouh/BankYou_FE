import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor() {
    // Inizializza lo stato di autenticazione da localStorage
    const authStatus = localStorage.getItem('isAuthenticated');
    this.isAuthenticatedSubject.next(authStatus === 'true');
  }

  login() {
    localStorage.setItem('isAuthenticated', 'true');
    this.isAuthenticatedSubject.next(true);
  }

  logout() {
    localStorage.removeItem('isAuthenticated');
    this.isAuthenticatedSubject.next(false);
  }
}