const squadNumberGenerator = require("../js/numbers/squadNumberGenerator");

describe("squadNumberGenerator", function () {
  const squad = [12, 15, 32, 5, 6, 77, 99];

  it("should return n if n is not already included in squad array", function () {
    expect(squadNumberGenerator(squad, 69)).toBe(69);
  });

  it("should return a replacement number if n is already in squad array AND IF squad array doesn't already include the replacement number", function () {
    expect(squadNumberGenerator(squad, 15)).toBe(69);
  });

  it("should return null if the desired number is already taken and a replacement number can't be formed by concatenating values between 1 - 9", function () {
    expect(squadNumberGenerator(squad, 99)).toBe(null);
  });
});
