import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from './auth.service'; // Importa il tuo servizio di autenticazione



@Component({
  selector: 'app-root',
  imports: [RouterModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'BankU';
  isMenuOpen: boolean = false;
  isAuthenticated: boolean = false;
  constructor(private router: Router, private authService: AuthService) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }


  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('isAuthenticated');
    this.toggleMenu();
    console.log('Logout eseguito');
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    // Sottoscrivi ai cambiamenti dello stato di autenticazione
    this.authService.isAuthenticated$.subscribe((authStatus) => {
      this.isAuthenticated = authStatus;
    });
  }
}

