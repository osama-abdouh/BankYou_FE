import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaPersonaleComponent } from './area-personale.component';

describe('AreaPersonaleComponent', () => {
  let component: AreaPersonaleComponent;
  let fixture: ComponentFixture<AreaPersonaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaPersonaleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaPersonaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
it('should have default userName and lastLogin values', () => {
  const fixture = TestBed.createComponent(AreaPersonaleComponent);
  const app = fixture.componentInstance;
  expect(app.userName).toEqual('Mario Rossi');
  expect(app.lastLogin).toEqual('11 Aprile 2025, 10:30');
});

it('should render the header with userName and lastLogin', () => {
  const fixture = TestBed.createComponent(AreaPersonaleComponent);
  fixture.detectChanges();
  const compiled = fixture.nativeElement as HTMLElement;
  expect(compiled.querySelector('h1')?.textContent).toContain('Benvenuto, Mario Rossi');
  expect(compiled.querySelector('p')?.textContent).toContain('Ultimo accesso: 11 Aprile 2025, 10:30');
});

it('should render account balances', () => {
  const fixture = TestBed.createComponent(AreaPersonaleComponent);
  fixture.detectChanges();
  const compiled = fixture.nativeElement as HTMLElement;
  expect(compiled.querySelector('.account-summary')?.textContent).toContain('Conto Corrente: € 1500.75');
  expect(compiled.querySelector('.account-summary')?.textContent).toContain('Risparmi: € 5000.00');
  expect(compiled.querySelector('.account-summary')?.textContent).toContain('Investimenti: € 12000.50');
});

it('should render recent transactions', () => {
  const fixture = TestBed.createComponent(AreaPersonaleComponent);
  fixture.detectChanges();
  const compiled = fixture.nativeElement as HTMLElement;
  expect(compiled.querySelector('.recent-transactions')?.textContent).toContain('Pagamento Bolletta');
  expect(compiled.querySelector('.recent-transactions')?.textContent).toContain('Bonifico Ricevuto');
  expect(compiled.querySelector('.recent-transactions')?.textContent).toContain('Prelievo Bancomat');
});

