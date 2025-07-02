const msgValidator = require("../js/strings/msgValidator");

describe("msgValidator", function () {
  const testStringA = "3hey2hi5hello"; // true
  const testStringB = "4hi1hello"; // false
  const testStringC = "3hey2hi5hello2"; // false
  const testStringD = "2hi5hello5there"; // true
  const testStringE = "hi2hello5there5"; // false

  it("should return true if the amount of chars in the word equal the value of the number preceeding it", function () {
    expect(msgValidator(testStringA)).toBe(true);
    expect(msgValidator(testStringD)).toBe(true);
  });

  it("should return false if the amount of chars in the word don't equal the value of the number preceeding it", function () {
    expect(msgValidator(testStringB)).toBe(false);
  });

  it("should return false if there are leftover chars, i.e. a number without a word following it", function () {
    expect(msgValidator(testStringC)).toBe(false);
  });

  it("should return false if alphabet chars preceed numeric chars, i.e. words before numbers", function () {
    expect(msgValidator(testStringE)).toBe(false);
  });
});
