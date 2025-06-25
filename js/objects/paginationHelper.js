class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }

  // returns the number of items within the entire collection
  itemCount() {
    return this.collection.length;
  }

  // returns the number of pages
  pageCount() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }

  // returns the number of items on the current page. pageIndex is zero based.
  // this method should return -1 for pageIndex values that are out of range

  pageItemCount(pageIndex) {

    if (pageIndex < 0 || pageIndex >= this.pageCount()) {
      return -1;
    }

    if (pageIndex < this.pageCount() - 1) {
      return this.itemsPerPage;
    }

    if (pageIndex === this.pageCount() - 1) {
      const leftoverItems = this.collection.length - (this.pageCount() - 1) * this.itemsPerPage;

      return leftoverItems;
    }

  }

  // determines what page an item is on. Zero based indexes
  // this method should return -1 for itemIndex values that are out of range

  pageIndex(itemIndex) {
    if (itemIndex < 0 || itemIndex >= this.collection.length) {
      return -1;
    }

    return Math.floor(itemIndex / this.itemsPerPage);
  }
}

module.exports = PaginationHelper;