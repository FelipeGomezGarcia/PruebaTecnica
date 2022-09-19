import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPelisComponent } from './detalles-pelis.component';

describe('DetallesPelisComponent', () => {
  let component: DetallesPelisComponent;
  let fixture: ComponentFixture<DetallesPelisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesPelisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesPelisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
