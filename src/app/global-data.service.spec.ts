import { TestBed } from '@angular/core/testing';

import { GlobalDataService } from './global-data.service';

describe('GlobalDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalDataService = TestBed.get(GlobalDataService);
    expect(service).toBeTruthy();
  });
});
