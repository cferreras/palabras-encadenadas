import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiempoComponent } from './tiempo.component';

describe('TiempoComponent', () => {
  let component: TiempoComponent;
  let fixture: ComponentFixture<TiempoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TiempoComponent]
    });
    fixture = TestBed.createComponent(TiempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
