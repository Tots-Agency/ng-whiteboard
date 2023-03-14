import { TestBed } from '@angular/core/testing';

import { NgWhiteboardService } from './ng-whiteboard.service';

describe('NgWhiteboardService', () => {
  let service: NgWhiteboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgWhiteboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
