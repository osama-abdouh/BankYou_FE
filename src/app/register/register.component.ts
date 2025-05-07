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

  dataNascitaError: string = '';
  maxDate: string = '';
  constructor() {
    // Calcola la data massima (oggi)
    const oggi = new Date();
    this.maxDate = oggi.toISOString().split('T')[0]; // Formatta la data come YYYY-MM-DD
  }
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

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      const firstInvalidControl = document.querySelector('.ng-invalid');
  
      if (firstInvalidControl instanceof HTMLElement) {
        firstInvalidControl.focus();
        firstInvalidControl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
  
      Object.keys(form.controls).forEach(field => {
        const control = form.controls[field];
        control.markAsTouched({ onlySelf: true });
      });
  
      return;
    }
  
    // Prosegui con la logica di invio (es. chiamata al backend)
    console.log('Form valido. Dati utente:', this.user);
  }

}
