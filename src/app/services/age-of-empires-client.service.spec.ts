import { TestBed } from '@angular/core/testing';

import { AgeOfEmpiresClientService } from './age-of-empires-client.service';

describe('AgeOfEmpiresClientService', () => {
  let service: AgeOfEmpiresClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgeOfEmpiresClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
