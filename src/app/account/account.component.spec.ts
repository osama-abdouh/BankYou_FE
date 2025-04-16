import { TestBed } from '@angular/core/testing';
import { AccountComponent } from './account.component';


describe('AccountComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AccountComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'banking-app' title`, () => {
    const fixture = TestBed.createComponent(AccountComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('banking-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AccountComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, banking-app');
  });
});

