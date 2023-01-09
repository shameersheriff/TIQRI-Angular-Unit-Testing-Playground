import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { CountryService } from '../country.service';

@Injectable({
  providedIn: 'root'
})
export class MockCountryService extends CountryService {
  override getData() {
    return of([1, 2, 3]);
  }
}
