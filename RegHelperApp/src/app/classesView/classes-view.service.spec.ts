import { TestBed } from '@angular/core/testing';

import { ClassesViewService } from './classes-view.service';

describe('ClassesViewService', () => {
  let service: ClassesViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassesViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
