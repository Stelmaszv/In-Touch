import { TestBed } from '@angular/core/testing';

import { TimeService } from './time.service';

describe('TimeService', () => {
  let service: TimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeService);
  });

  it('test if created', () => {
    expect(service).toBeTruthy();
  });

  it('test getData', () => {
    expect(service.getData()).toBe(2020);
  });

});
