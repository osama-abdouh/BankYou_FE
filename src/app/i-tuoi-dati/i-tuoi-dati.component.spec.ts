import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ITuoiDatiComponent } from './i-tuoi-dati.component';

describe('ITuoiDatiComponent', () => {
  let component: ITuoiDatiComponent;
  let fixture: ComponentFixture<ITuoiDatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ITuoiDatiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ITuoiDatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
