import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  title = 'banking-app';
  constructor(private router: Router) {}

  vaiAAiuto() {
    this.router.navigate(['/aiuto']);
  }
  vaiAituoidati() {
    this.router.navigate(['/i-tuoi-dati']);
  }
}
