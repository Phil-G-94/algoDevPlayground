const capitalise = require("./capitalise");

test("capitalise is defined", () => {
    expect(capitalise).toBeDefined();
});

test("capitalise is a function", () => {
    expect(typeof capitalise).toEqual("function");
});

test("capitalises the first letter of every word in a sentence", () => {
    expect(capitalise("hey, how is it going?")).toEqual("Hey, How Is It Going?");
});

test('capitalizes the first letter', () => {
    expect(capitalise('i love breakfast at bill miller bbq')).toEqual(
        'I Love Breakfast At Bill Miller Bbq'
    );
});