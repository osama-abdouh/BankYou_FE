import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes'; // o app-routing.module se usi un file diverso

import { HomeComponent } from './home/home.component';
import { AiutoComponent } from './aiuto/aiuto.component';
// importa anche gli altri componenti che usi...

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AiutoComponent,
    // altri componenti che hai
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}


