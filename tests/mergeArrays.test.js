const mergeArrays = require("../js/objects/arrays/mergeArrays");

describe("mergeArrays", () => {
  it("merges two distinct arrays", () => {
    expect(mergeArrays([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("merges arrays with common elements", () => {
    expect(mergeArrays([1, 2, 3], [2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  it("handles empty first array", () => {
    expect(mergeArrays([], [1, 2])).toEqual([1, 2]);
  });

  it("handles empty second array", () => {
    expect(mergeArrays([3, 1], [])).toEqual([1, 3]);
  });

  it("handles both arrays being empty", () => {
    expect(mergeArrays([], [])).toEqual([]);
  });

  it("does not preserve duplicates from second array", () => {
    expect(mergeArrays([1, 2, 2, 3], [2, 4])).toEqual([1, 2, 3, 4]);
  });

  it("works with negative numbers", () => {
    expect(mergeArrays([-3, -1, 2], [-2, 2])).toEqual([-3, -2, -1, 2]);
  });

  it("throws error when inputs are not arrays", () => {
    expect(() => mergeArrays(123, [1, 2])).toThrow("Both parameters must be arrays.");
    expect(() => mergeArrays([1], "not an array")).toThrow("Both parameters must be arrays.");
    expect(() => mergeArrays("hello", null)).toThrow("Both parameters must be arrays.");
  });

  it("works with mixed types (number and string)", () => {
    expect(mergeArrays([1, "2"], ["2", 3])).toEqual([1, "2", 3]);
  });

  it("handles arrays that are already sorted", () => {
    expect(mergeArrays([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
  });

  it("sorting fails with strings (demonstrates a flaw)", () => {
    expect(mergeArrays(["b", "a"], ["c"])).toEqual(["b", "a", "c"]);
  });
});
