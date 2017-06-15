import { TestBed, inject } from '@angular/core/testing';

import { RemoteService } from './remote.service';

describe('RemoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemoteService]
    });
  });

  it('should ...', inject([RemoteService], (service: RemoteService) => {
    expect(service).toBeTruthy();
  }));
});
