const twoWaySort = require("../js/objects/arrays/twoWaySort");

describe('twoWaySort', () => {
  it('should sort both arrays based on each other (basic case)', () => {
    const arr1 = [5, 4, 3, 2, 1];
    const arr2 = [6, 5, 7, 8, 9];
    const result = twoWaySort(arr1, arr2);
    expect(result).toEqual([[4, 5, 3, 2, 1], [9, 8, 7, 5, 6]]);
  });

  it('should return the same arrays if they are already sorted correctly', () => {
    const arr1 = [2, 1, 3, 4, 5];
    const arr2 = [5, 6, 7, 8, 9];
    const result = twoWaySort(arr1, arr2);
    expect(result).toEqual([[2, 1, 3, 4, 5], [6, 5, 7, 8, 9]]);
  });

  it('should handle arrays with repeated values', () => {
    const arr1 = [5, 6, 9, 2, 6, 5];
    const arr2 = [3, 6, 7, 4, 8, 1];
    const result = twoWaySort(arr1, arr2);
    expect(result).toEqual([[5, 5, 2, 6, 9, 6], [4, 3, 1, 6, 8, 7]]);
  });

  it('should handle arrays of length 2', () => {
    const arr1 = [100, 200];
    const arr2 = [1, 0];
    const result = twoWaySort(arr1, arr2);
    expect(result).toEqual([[200, 100], [1, 0]]);
  });

  it('should sort correctly when both arrays have duplicate values', () => {
    const arr1 = [3, 3, 2, 1];
    const arr2 = [2, 2, 1, 3];
    const result = twoWaySort(arr1, arr2);
    expect(result).toEqual([[2, 3, 3, 1], [3, 1, 2, 2]]);
  });
});