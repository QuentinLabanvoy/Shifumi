import { TestBed } from '@angular/core/testing';

import { shifumiService } from './shifumi.service';

describe('ShifumiService', () => {
  let service: shifumiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(shifumiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
