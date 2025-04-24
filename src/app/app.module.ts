import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes'; // Usa solo routes

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Configura il routing qui
    AppComponent,
  ],
  providers: [],
  // bootstrap: [AppComponent], // Removed as AppComponent is standalone
})
export class AppModule {}