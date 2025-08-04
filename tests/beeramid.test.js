const beeramid = require("../js/numbers/beeramid");

describe("beeramid", () => {
  it("should return a number representing the amount of complete levels", () => {
    expect(typeof beeramid(1500, 2)).toBe("number");
  });

  it("should return 12 if passed a bonus of 1500 and a price per beer of 2", () => {
    expect(beeramid(1500, 2)).toBe(12);
  });
});