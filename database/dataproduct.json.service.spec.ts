import { TestBed } from '@angular/core/testing';

import { Dataproduct.JsonService } from './dataproduct.json.service';

describe('Dataproduct.JsonService', () => {
  let service: Dataproduct.JsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dataproduct.JsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
