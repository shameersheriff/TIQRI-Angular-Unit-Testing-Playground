import { Component } from '@angular/core';
import { CountryService } from './service/country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-unit-testing';
  countryDetails: any;

  constructor(private countryService: CountryService){

  }

  ngOnInit(): void{
    this.getCountryDetails();
  }

  getCountryDetails(): void{
    this.countryService.getCountry().subscribe((data: any) =>{
      this.countryDetails = data;
    });
  }

}
