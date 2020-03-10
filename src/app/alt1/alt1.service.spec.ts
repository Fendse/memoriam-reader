import { TestBed } from '@angular/core/testing';

import { Alt1Service } from './alt1.service';

describe('Alt1Service', () => {
  let service: Alt1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Alt1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
