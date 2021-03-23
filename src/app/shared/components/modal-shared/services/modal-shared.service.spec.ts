import { TestBed } from '@angular/core/testing';

import { ModalSharedService } from './modal-shared.service';

describe('ModalSharedService', () => {
  let service: ModalSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
