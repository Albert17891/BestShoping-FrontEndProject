import { TestBed } from '@angular/core/testing';

import { VaucerService } from './vaucer-service';

describe('VaucerServiceService', () => {
  let service: VaucerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VaucerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
