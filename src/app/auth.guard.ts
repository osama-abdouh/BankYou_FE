import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true; // L'utente è autenticato, consenti l'accesso
    } else {
      this.router.navigate(['/login']); // Reindirizza alla pagina di login
      return false; // Impedisci l'accesso
    }
  }
}