import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AreaPersonaleComponent } from './area-personale.component';

describe('AreaPersonaleComponent', () => {
  let component: AreaPersonaleComponent;
  let fixture: ComponentFixture<AreaPersonaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaPersonaleComponent] // Importa il componente standalone
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

