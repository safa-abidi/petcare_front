import { TestBed } from '@angular/core/testing';

import { PetOwnerGuard } from './pet-owner.guard';

describe('PetOwnerGuard', () => {
  let guard: PetOwnerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PetOwnerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
