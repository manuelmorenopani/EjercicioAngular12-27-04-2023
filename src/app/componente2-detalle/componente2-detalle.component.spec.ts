import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente2DetalleComponent } from './componente2-detalle.component';

describe('Componente2DetalleComponent', () => {
  let component: Componente2DetalleComponent;
  let fixture: ComponentFixture<Componente2DetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente2DetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente2DetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
