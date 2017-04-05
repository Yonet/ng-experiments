import { TestBed, inject } from '@angular/core/testing';

import { DetectorService } from './detector.service';

describe('DetectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetectorService]
    });
  });

  it('should ...', inject([DetectorService], (service: DetectorService) => {
    expect(service).toBeTruthy();
  }));
});
