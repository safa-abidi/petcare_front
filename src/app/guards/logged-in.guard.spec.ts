import { TestBed } from '@angular/core/testing';

import { LoggedInGuard } from './logged-in.guard';

describe('LoggedInRouteGuard', () => {
  let guard: LoggedInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoggedInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
