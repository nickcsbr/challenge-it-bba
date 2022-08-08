import { TestBed } from '@angular/core/testing';

import { PoloService } from './polo.service';

describe('PoloService', () => {
  let service: PoloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
