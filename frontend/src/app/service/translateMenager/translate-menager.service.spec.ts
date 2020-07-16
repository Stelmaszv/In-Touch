import { TestBed } from '@angular/core/testing';

import { TranslateMenagerService } from './translate-menager.service';

describe('TranslateMenagerService', () => {
  let service: TranslateMenagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateMenagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
