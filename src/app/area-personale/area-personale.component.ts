import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-area-personale',
  imports: [CommonModule],
  templateUrl: './area-personale.component.html',
  styleUrl: './area-personale.component.css'
})
export class AreaPersonaleComponent {
  userName = 'Mario Rossi';
  lastLogin = '11 Aprile 2025, 10:30';
  accountBalance = 15000000.75;
  savingsBalance = 5000.00;
  investmentsBalance = 12000.50;



  recentTransactions = [
    { date: '10 Aprile 2025', description: 'Pagamento Bolletta', amount: -50.00 },
    { date: '9 Aprile 2025', description: 'Bonifico Ricevuto', amount: 200.00 },
    { date: '8 Aprile 2025', description: 'Prelievo Bancomat', amount: -100.00 },
  ];
  transferMoney() {
    alert('Funzione Trasferisci Denaro non ancora implementata.');
  }

  cordinate_conto() {
    alert('Funzione Paga Bollette non ancora implementata.');
  }

  Aggiungi_fondi() {
    alert('Funzione Visualizza Investimenti non ancora implementata.');
  }

  Altro() {
    alert('Funzione Altro non ancora implementata.');
  }
  
  isBlurred = false; // Stato per gestire lo sfocamento

  toggleBlur(event:Event) {
    const button = event.target as HTMLElement;
    button.classList.toggle('blur-effect'); // Inverte lo stato dello sfocamento
  }


}
//ciao merda