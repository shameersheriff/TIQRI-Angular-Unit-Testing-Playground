import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CountryService } from './service/country.service';

describe('AppComponent', () => {
  let countryService: CountryService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    countryService = TestBed.inject(CountryService);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-unit-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-unit-testing');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'angular-unit-testing app is running!'
    );
  });

  it('jasmine code examples ', () => {

    //boolean
    let x = true;
    expect(x).toBe(true);
    expect(x).not.toBe(false);

    //numeric
    let a = 2;
    expect(a).toEqual(2);

    let pi = 3.14159265359;
    expect(pi).toBeGreaterThan(3);
    expect(pi).toBeLessThan(4);
    expect(pi).toBeCloseTo(3.1415, 0.1);

    //string
    let companyName = 'TIQRI';
    expect(companyName).toMatch(/TIQRI/);
    expect(companyName).toMatch('TIQRI');

    let message = 'Hello TIQRIans';
    expect(message).toContain('Hello');

    //variables - initialization, declaration capturing
    let y;
    expect(y).toBeUndefined();
    y = '123';
    expect(y).toBeDefined();
    y = null;
    expect(y).toBeNull();

  });

  //spyon function
  it('should check getCountry function is called in ngOnInit', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const countryServiceSpy = spyOn(countryService, 'getCountry').and.callThrough();
    expect(countryServiceSpy).not.toHaveBeenCalled();
    fixture.detectChanges();
    let component = fixture.componentInstance;
    component.ngOnInit();
    expect(countryServiceSpy).toHaveBeenCalled();
  });

});
