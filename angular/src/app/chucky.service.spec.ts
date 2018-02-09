import { TestBed, inject } from '@angular/core/testing';

import { ChuckyServiceService } from './chucky-service.service';

describe('ChuckyServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChuckyServiceService]
    });
  });

  it('should be created', inject([ChuckyServiceService], (service: ChuckyServiceService) => {
    expect(service).toBeTruthy();
  }));
});
