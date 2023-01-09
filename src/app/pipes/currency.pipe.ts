import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: number, currencyCode: string = 'USD', symbolDisplay: boolean = true): string {
    const currency = symbolDisplay ? `${currencyCode} ` : '';
    return currency + value.toFixed(2);
  }

}
