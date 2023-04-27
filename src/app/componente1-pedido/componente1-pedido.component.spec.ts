import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente1PedidoComponent } from './componente1-pedido.component';

describe('Componente1PedidoComponent', () => {
  let component: Componente1PedidoComponent;
  let fixture: ComponentFixture<Componente1PedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente1PedidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente1PedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
