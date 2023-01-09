import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CountryService } from './country.service';
import { MockCountryService } from './mock/mock-country.service';

describe('CountryService', () => {
  let service: CountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        { provide: CountryService, useClass: MockCountryService }
      ]
    });
    service = TestBed.inject(CountryService);
  });

  it('should return mock data', () => {
    service.getData().subscribe(data => {
      expect(data).toEqual([1, 2, 3]);
    });
  });
});
