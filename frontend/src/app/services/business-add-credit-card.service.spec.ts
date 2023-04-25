import { TestBed } from '@angular/core/testing';

import { BusinessAddCreditCardService } from './business-add-credit-card.service';

describe('BusinessAddCreditCardService', () => {
  let service: BusinessAddCreditCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinessAddCreditCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
