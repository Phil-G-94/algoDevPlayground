const isPalindrome = require("../js/strings/palindrome");

describe("isPalindrome", function () {
  it("should return true if a given string is a palindrome", function () {
    expect(isPalindrome("A man, a plan, a canal - Panama")).toBe(true);
    expect(isPalindrome("Madam, I'm Adam")).toBe(true);
    expect(isPalindrome("100001")).toBe(true);
  });

  it("should return false if a given string is not a palindrome", function () {
    expect(isPalindrome("Greetings")).toBe(false);
    expect(isPalindrome("Abacus")).toBe(false);
  });
});