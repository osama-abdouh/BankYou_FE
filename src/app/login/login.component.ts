import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Aggiungi l'importazione di FormsModule

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],  // Aggiungi FormsModule qui
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.http.post('http://localhost:8080/api/auth/login', this.credentials)
      .subscribe({
        next: (response) => {
          console.log('Login effettuato con successo', response);
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