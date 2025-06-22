const isWilsonPrime = require("../js/numbers/wilsonPrimes");

describe("isWilsonPrime", function () {
  it("should take a number and return true if it is a Wilson prime; return false otherwise.", function () {
    expect(isWilsonPrime(5)).toBe(true);
    expect(isWilsonPrime(3)).toBe(false);
  });
});
