import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiutoComponent } from './aiuto.component';

describe('AiutoComponent', () => {
  let component: AiutoComponent;
  let fixture: ComponentFixture<AiutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiutoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
