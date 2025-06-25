const PaginationHelper = require("../js/objects/paginationHelper");

const pagHelper = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 4);

describe("pagHelper", function () {
  it("should return the number of items within the entire collection", function () {
    expect(pagHelper.itemCount()).toBe(6);
  });

  it("should return the number of pages", function () {
    expect(pagHelper.pageCount()).toBe(2);
  });

  it("should return the number of items of the current page", function () {
    expect(pagHelper.pageItemCount(-1)).toBe(-1);
    expect(pagHelper.pageItemCount(2)).toBe(-1);

  });

  it("should return the correct page index for a valid item index", function () {
    expect(pagHelper.pageIndex(0)).toBe(0);
    expect(pagHelper.pageIndex(4)).toBe(1);
    expect(pagHelper.pageIndex(5)).toBe(1);
  });

  it("should return -1 for pageIndex with an invalid item index", function () {
    expect(pagHelper.pageIndex(-1)).toBe(-1);
    expect(pagHelper.pageIndex(6)).toBe(-1);
  });
});