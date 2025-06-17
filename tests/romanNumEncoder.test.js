const romanNumEncoder = require("../js/strings/romanNumEncoder");

describe('romanNumEncoder', function () {
  it('should take a num and return it\s representation as a Roman Number', function () {
    expect(romanNumEncoder(1000)).toBe("M");
    expect(romanNumEncoder(4)).toBe('IV');
    expect(romanNumEncoder(1)).toBe('I');
    expect(romanNumEncoder(1990)).toBe('MCMXC');
    expect(romanNumEncoder(2008)).toBe('MMVIII');
    expect(romanNumEncoder(1444)).toBe('MCDXLIV');
  });

  it(`should return "No Roman Numeral representation" if num is less than or equal to 0, or if it's greater than 3999`, function () {
    expect(romanNumEncoder(-1)).toBe("No Roman Numeral representation");
  });
});