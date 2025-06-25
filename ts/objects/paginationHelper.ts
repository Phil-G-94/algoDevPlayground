/**
 *
 * https://www.codewars.com/kata/515bb423de843ea99400000a/solutions/typescript
 *
 */

class PaginationHelper {
  constructor(
    public collection: any[],
    public itemsPerPage: number
  ) {
    // The constructor takes in an array of items and a integer indicating how many
    // items fit within a single page
  }

  itemCount() {
    // returns the number of items within the entire collection

    return this.collection.length;
  }

  pageCount() {
    // returns the number of pages

    return Math.ceil(this.collection.length / this.itemsPerPage);
  }

  pageItemCount(pageIndex: number) {
    // returns the number of items on the current page. pageIndex is zero based.
    // this method should return -1 for pageIndex values that are out of rang

    // check invalid pageIndex
    if (pageIndex < 0 || pageIndex >= this.pageCount()) {
      return -1;
    }

    // full page - return itemsPerPage
    if (pageIndex < this.pageCount() - 1) {
      return this.itemsPerPage;
    }

    // if last page, calc how many items left
    if (pageIndex === this.pageCount() - 1) {
      const leftoverItems: number =
        this.collection.length - (this.pageCount() - 1) * this.itemsPerPage;
      return leftoverItems;
    }
  }

  pageIndex(itemIndex: number) {
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range

    if (itemIndex < 0 || itemIndex >= this.collection.length) {
      return -1;
    } else {
      return Math.floor(itemIndex / this.itemsPerPage);
    }
  }
}

const pagHelper = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 4);
