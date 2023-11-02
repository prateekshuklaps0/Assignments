import { TestBed } from '@angular/core/testing';

import { MyContextService } from './my-context.service';

describe('MyContextService', () => {
  let service: MyContextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyContextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
