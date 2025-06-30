const whoLikesIt = require("../js/strings/whoLikesIt");

describe("whoLikesIt", function () {
  const arr1 = ["Alex", "Jacob", "Mark", "Max"];
  const arr2 = ["Bob"];
  const arr3 = ["Sam", "Stuart"];

  it("should return 'no one likes this' when arr.length is 0", function () {
    expect(whoLikesIt([])).toBe(`no one likes this`);
  });

  it("should return 'Alex, Jacob and 2 others like this` when arr.length is 4", function () {
    expect(whoLikesIt(arr1)).toBe(`Alex, Jacob and 2 others like this`);
  });

  it("should return 'Bob likes this' when arr.length is 1", function () {
    expect(whoLikesIt(arr2)).toBe(`Bob likes this`);
  });

  it("should return 'Sam and Stuart like this' when arr.length is 2", function () {
    expect(whoLikesIt(arr3)).toBe(`Sam and Stuart like this`);
  });
});
