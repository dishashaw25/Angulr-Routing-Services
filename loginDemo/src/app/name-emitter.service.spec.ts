import { TestBed } from '@angular/core/testing';

import { NameEmitterService } from './name-emitter.service';

describe('NameEmitterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NameEmitterService = TestBed.get(NameEmitterService);
    expect(service).toBeTruthy();
  });
});
