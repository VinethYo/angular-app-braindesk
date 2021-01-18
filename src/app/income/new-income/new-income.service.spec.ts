import { TestBed } from '@angular/core/testing';

import { NewIncomeService } from './new-income.service';

describe('NewIncomeService', () => {
  let service: NewIncomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewIncomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
