import { TestBed } from '@angular/core/testing';

import { AdminMangService } from './admin-manager.service';

describe('AdminMangService', () => {
  let service: AdminMangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminMangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
