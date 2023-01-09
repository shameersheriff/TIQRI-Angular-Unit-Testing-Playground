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

  it('should return mock country list data', () => {
    service.getData().subscribe((data: any) => {
      expect(data).toEqual([1, 2, 3]);
    });
  });

  it('should return mock country data', () => {
    let country = {name:'Sri Lanka', region:'South Asia'};
    service.getCountry().subscribe((data: any) => {
      expect(data).toEqual(country);
    });
  });
});
