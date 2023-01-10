describe('JasmineExamples', () => {

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

});
