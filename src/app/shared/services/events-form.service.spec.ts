import { TestBed } from '@angular/core/testing';

import { EventsFormService } from './events-form.service';

describe('EventsFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventsFormService = TestBed.get(EventsFormService);
    expect(service).toBeTruthy();
  });
});
