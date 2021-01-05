import { TestBed } from '@angular/core/testing';

import { LegoCardService } from './lego-card.service';

describe('LegoCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LegoCardService = TestBed.get(LegoCardService);
    expect(service).toBeTruthy();
  });
});
