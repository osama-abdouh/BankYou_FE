import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,NgForm } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthService } from '../auth.service';
import { User } from './user.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  imports: [RouterModule, CommonModule,FormsModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatFormFieldModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  isPasswordVisible: boolean = false;
  isConfirmPasswordVisible: boolean = false;
  passwordErrors: string[] = [];
  @ViewChild('registerForm') registerForm: ElementRef | undefined;
  maxDate: string = '';

  user = {
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    codiceFiscale: '',
    dataNascita: '',
    genere: '',
    password: '',
    confermaPassword: '',
    termini: false
  };
   successMessage = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router, private http: HttpClient) {
    // Calcola la data massima (oggi)
    const oggi = new Date();
    this.maxDate = oggi.toISOString().split('T')[0]; // Formatta la data come YYYY-MM-DD
  }

  dataNascitaError: string = '';

  validateDataNascita(): void {
    const oggi = new Date();
    const dataNascita = new Date(this.user.dataNascita);

    // Controlla se l'utente ha meno di 18 anni
    const eta = oggi.getFullYear() - dataNascita.getFullYear();
    const mese = oggi.getMonth() - dataNascita.getMonth();
    const giorno = oggi.getDate() - dataNascita.getDate();

    if (eta < 18 || (eta === 18 && (mese < 0 || (mese === 0 && giorno < 0)))) {
      this.dataNascitaError = 'Devi avere almeno 18 anni per registrarti.';
      return;
    }

    // Nessun errore
    this.dataNascitaError = '';
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  toggleConfirmPasswordVisibility() {
    this.isConfirmPasswordVisible = !this.isConfirmPasswordVisible;
  }

  validatePassword() {
    const password = this.user.password;
    this.passwordErrors = [];

    if (!/[A-Z]/.test(password)) {
      this.passwordErrors.push('La password deve contenere almeno un carattere maiuscolo.');
    }
    if (!/\d/.test(password)) {
      this.passwordErrors.push('La password deve contenere almeno un numero.');
    }
    if (!/[@$!%*?&]/.test(password)) {
      this.passwordErrors.push('La password deve contenere almeno un carattere speciale.');
    }
    if (password.length < 8) {
      this.passwordErrors.push('La password deve contenere almeno 8 caratteri.');
    }
  }
isSubmitting = false;
  onSubmit() {
     if (this.isSubmitting) return;
  this.isSubmitting = true;
  console.log('Submit invocato, dati:', this.user);

  // Converte dataNascita in formato "yyyy-MM-dd"
  let dataNascitaFormattata = '';
  if (this.user.dataNascita && !isNaN(Date.parse(this.user.dataNascita))) {
    const d = new Date(this.user.dataNascita);
    const yyyy = d.getFullYear();
    const mm = ('0' + (d.getMonth() + 1)).slice(-2); // mesi 0-based
    const dd = ('0' + d.getDate()).slice(-2);
    dataNascitaFormattata = `${yyyy}-${mm}-${dd}`;
  }

  // Costruisci il payload da inviare al backend
  const payload = {
    nome: this.user.nome,
    cognome: this.user.cognome,
    email: this.user.email,
    telefono: this.user.telefono,
    codiceFiscale: this.user.codiceFiscale,
    dataNascita: dataNascitaFormattata,
    genere: this.user.genere,
    password: this.user.password
  };

  console.log('Payload finale da inviare:', payload);

  // Effettua la chiamata HTTP
this.http.post<any>('http://localhost:8080/api/auth/register', payload)
  .subscribe({
    next: (res) => {
      // res.message contiene il messaggio di successo
      this.successMessage = res.message;
      alert(this.successMessage);
      setTimeout(() => {
      this.router.navigate(['/login']);
    }, 1000);
    },
    error: (err) => {
      // err.error.error contiene il messaggio di errore
      this.errorMessage = err.error?.error || 'Errore durante la registrazione!';
    }
  });
}

   
}
