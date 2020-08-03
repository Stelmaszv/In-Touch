import { TestBed } from '@angular/core/testing';

import { EmailValidService } from './email-valid.service';

describe('EmailValidService', () => {
  let service: EmailValidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailValidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
