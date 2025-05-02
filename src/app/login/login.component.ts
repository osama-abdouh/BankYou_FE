import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Aggiungi l'importazione di FormsModule
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../auth.service'; // Importa il tuo servizio di autenticazione
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterModule],  // Aggiungi FormsModule qui
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    username: '',
    password: ''
  };
  isauthenticated: boolean = false; // Variabile per gestire lo stato di autenticazione

   // Variabile per gestire la visibilità della password
   isPasswordVisible = false;

  constructor(private http: HttpClient, private router: Router, private authservice: AuthService) {}

  // Funzione per alternare la visibilità della password
  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }


  onSubmit() {
    this.http.post('http://localhost:8080/api/auth/login', this.credentials)
      .subscribe({
        next: (response) => {
          console.log('Login effettuato con successo', response);
          this.authservice.login(); // Chiama il metodo di login del servizio di autenticazione
          // Puoi aggiungere una navigazione o un'azione qui
          this.router.navigate(['/area-personale']);
        },
        error: (error) => {
          console.error('Errore durante il login', error);
          alert('Credenziali non valide');
        }
      });
  }
}