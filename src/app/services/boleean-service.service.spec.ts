import { TestBed } from '@angular/core/testing';

import { BoleeanServiceService } from './boleean-service.service';

describe('BoleeanServiceService', () => {
  let service: BoleeanServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoleeanServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
