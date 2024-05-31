import { TestBed } from '@angular/core/testing';

import { ClienteContaService } from './cliente-conta.service';

describe('ClienteContaService', () => {
  let service: ClienteContaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteContaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
