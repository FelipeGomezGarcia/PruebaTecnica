import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesSeriesComponent } from './detalles-series.component';

describe('DetallesSeriesComponent', () => {
  let component: DetallesSeriesComponent;
  let fixture: ComponentFixture<DetallesSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesSeriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
