import { TestBed } from '@angular/core/testing';

import { BuilderService } from './builder.service';

describe('BuilderService', () => {
  let service: BuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
