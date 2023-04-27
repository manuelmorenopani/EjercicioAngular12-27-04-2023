import { TestBed } from '@angular/core/testing';

import { ServiciopedidoService } from './serviciopedido.service';

describe('ServiciopedidoService', () => {
  let service: ServiciopedidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciopedidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
