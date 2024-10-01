import { TestBed } from '@angular/core/testing';

import { NgxToastrMessageService } from './ngx-toastr-message.service';

describe('NgxToastrMessageService', () => {
  let service: NgxToastrMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxToastrMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
