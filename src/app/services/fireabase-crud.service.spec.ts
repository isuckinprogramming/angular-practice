import { TestBed } from '@angular/core/testing';

import { FireabaseCRUDService } from './fireabase-crud.service';

describe('FireabaseCRUDService', () => {
  let service: FireabaseCRUDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireabaseCRUDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
