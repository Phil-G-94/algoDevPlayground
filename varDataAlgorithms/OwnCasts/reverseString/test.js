
const reverseString = require("./index");

test("reverseString function exists", () => {
    expect(reverseString).toBeDefined();
});

test("reverseString reverses a string", () => {
    expect(reverseString("apple")).toEqual("elppa");
    expect(reverseString("abcd ")).toEqual(" dcba");
});