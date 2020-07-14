import { TestBed } from '@angular/core/testing';

import { RouterCustumService } from './router-custum.service';

describe('RouterCustumService', () => {
  let service: RouterCustumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouterCustumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
