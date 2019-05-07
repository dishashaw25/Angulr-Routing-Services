import { TestBed } from '@angular/core/testing';

import { RouteResolver} from './route-resolver';

describe('RouteResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouteResolver = TestBed.get(RouteResolver);
    expect(service).toBeTruthy();
  });
});
