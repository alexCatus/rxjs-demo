import { TestBed } from '@angular/core/testing';

import { IdCardService } from './id-card.service';

describe('IdCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdCardService = TestBed.get(IdCardService);
    expect(service).toBeTruthy();
  });
});
