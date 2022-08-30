import { TestBed } from '@angular/core/testing';

import { NoContactFormService } from './no-contact-form.service';

describe('NoContactFormService', () => {
  let service: NoContactFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoContactFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
