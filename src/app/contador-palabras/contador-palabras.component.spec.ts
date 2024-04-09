import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorPalabrasComponent } from './contador-palabras.component';

describe('ContadorPalabrasComponent', () => {
  let component: ContadorPalabrasComponent;
  let fixture: ComponentFixture<ContadorPalabrasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContadorPalabrasComponent]
    });
    fixture = TestBed.createComponent(ContadorPalabrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
