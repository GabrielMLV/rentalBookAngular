import { TestBed } from '@angular/core/testing';

import { RentalbookService } from './rentalbook.service';

describe('RentalbookService', () => {
  let service: RentalbookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentalbookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
