import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HightlightDirective } from './directives/highlight/hightlight.directive';
import { CurrencyPipe } from './pipes/currency.pipe';
import { CountryService } from './service/country.service';

@NgModule({
  declarations: [
    AppComponent,
    HightlightDirective,
    CurrencyPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
