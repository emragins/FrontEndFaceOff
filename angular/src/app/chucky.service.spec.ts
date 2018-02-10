import { TestBed, inject } from '@angular/core/testing';

import { ChuckyService } from './chucky.service';

describe('ChuckyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChuckyService]
    });
  });

  it('should be created', inject([ChuckyService], (service: ChuckyService) => {
    expect(service).toBeTruthy();
  }));
});
