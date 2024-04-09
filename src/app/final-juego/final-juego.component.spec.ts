import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalJuegoComponent } from './final-juego.component';

describe('FinalJuegoComponent', () => {
  let component: FinalJuegoComponent;
  let fixture: ComponentFixture<FinalJuegoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinalJuegoComponent]
    });
    fixture = TestBed.createComponent(FinalJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
