const maxChars = require("./maxChars");

test("maxChars is defined", () => {
    expect(maxChars).toBeDefined();
});

test("maxChar finds the most frequently occuring character in a string", () => {
    expect(maxChars("a")).toEqual("The most frequently occuring character in this string is a");
    expect(maxChars("abckkkkkkk")).toEqual("The most frequently occuring character in this string is k");
});

test("maxChar works with numbers", () => {
    expect(maxChars("11111111111987")).toEqual("The most frequently occuring character in this string is 1");
})

