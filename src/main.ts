import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';  // Importa il tuo componente principale
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(FormsModule),
    importProvidersFrom(HttpClientModule),  // Importa i moduli necessari
    provideRouter(routes),  // Definisci il router
             // Importa LoginComponent come standalone
  ]
}).catch(err => console.error(err));