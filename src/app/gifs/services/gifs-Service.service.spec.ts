/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GifsServiceService } from './gifs-Service.service';

describe('Service: GifsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GifsServiceService]
    });
  });

  it('should ...', inject([GifsServiceService], (service: GifsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
