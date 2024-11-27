const isPalindrome = require("./index");

test("isPalindrome function is defined", () => {
    expect(typeof isPalindrome).toEqual("function");
});

test("'civic' is a palindrome", () => {
    expect(isPalindrome("civic")).toBeTruthy();
});

test("'greetings' is not a palindrome", () => {
    expect(isPalindrome("greetings")).toBeFalsy();
});

test("' aba' is not a palindrome", () => {
    expect(isPalindrome(" aba")).toBeFalsy();
});

test("'100001' is a palindrome", () => {
    expect(isPalindrome("100001")).toBeTruthy();
});