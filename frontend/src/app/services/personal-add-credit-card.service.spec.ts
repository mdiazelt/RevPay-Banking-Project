import { TestBed } from '@angular/core/testing';

import { PersonalAddCreditCardService } from './personal-add-credit-card.service';

describe('PersonalAddCreditCardService', () => {
  let service: PersonalAddCreditCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalAddCreditCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
