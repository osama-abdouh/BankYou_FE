import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes'; // Importa le tue rotte

import { HomeComponent } from './home/home.component';
import { AiutoComponent } from './aiuto/aiuto.component';
// Importa altri componenti che usi...

@NgModule({
  declarations: [
    AppComponent,    // Root component
    HomeComponent,   // Component for the home page
    AiutoComponent,  // Component for the "Aiuto" page
  ],
  
  imports: [
    BrowserModule,   // Questo è necessario per le funzionalità di base di Angular
    RouterModule.forRoot(routes), // Configurazione delle rotte
  ],
  
  bootstrap: [AppComponent]  // AppComponent è il componente principale (root component)
})
export class AppModule { }



