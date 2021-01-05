import { TestBed } from '@angular/core/testing';

import { BaseCardService } from './base-card.service';

describe('BaseCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaseCardService = TestBed.get(BaseCardService);
    expect(service).toBeTruthy();
  });
});
