import { TestBed } from '@angular/core/testing';

import { HumanCardService } from './human-card.service';

describe('HumanCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HumanCardService = TestBed.get(HumanCardService);
    expect(service).toBeTruthy();
  });
});
