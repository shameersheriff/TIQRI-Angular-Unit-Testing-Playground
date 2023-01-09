import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  getData(): any {
    return this.http.get<any[]>('/api/country');
  }

  getCountry(): any{
    return new Observable((subscriber) => {
      let country = {name:'Sri Lanka', region:'South Asia'};
      subscriber.next(country);
    });
  }
}
