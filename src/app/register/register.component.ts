import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [RouterModule, CommonModule,FormsModule],
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
    password: '',
    confermaPassword: '',
    termini: false
  };

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

  onSubmit(form: any) {
    if (form.valid)  {
      // Trova il primo campo non valido
      const firstInvalidControl = this.registerForm?.nativeElement.querySelector('.ng-invalid');
      if (firstInvalidControl) {
        firstInvalidControl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstInvalidControl.focus();
      }
    }
    else {
      console.log('Dati registrazione:', this.user);
      // Logica per inviare i dati al server
    }
  }

}
