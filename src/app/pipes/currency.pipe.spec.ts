import { CurrencyPipe } from './currency.pipe';

describe('CurrencyPipe', () => {
  let pipe: CurrencyPipe;

  beforeEach(() => {
    pipe = new CurrencyPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should format the number as currency with the default currency code and symbol', () => {
    expect(pipe.transform(123.456)).toBe('USD 123.46');
  });

  it('should format the number as currency with the specified currency code and symbol', () => {
    expect(pipe.transform(123.456, 'EUR')).toBe('EUR 123.46');
  });

  it('should format the number as currency with the specified currency code but no symbol', () => {
    expect(pipe.transform(123.456, 'EUR', false)).toBe('123.46');
  });
});
