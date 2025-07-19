const arrA = [5, 4, 3, 2, 1];
const arrB = [6, 5, 7, 8, 9];

const twoWaySort = (arr1: number[], arr2: number[]) => {
  const n = arr1.length;

  const arr2SortedIndices = [...arr2.keys()].sort((a, b) => {
    if (arr2[a] !== arr2[b]) return arr2[a] - arr2[b];
    return a - b;
  });

  const sortedArr1 = Array(n);

  arr2SortedIndices.forEach((fromIdx, toIdx) => {
    sortedArr1[toIdx] = arr1[fromIdx];
  });

  const arr1SortedIndices = [...arr1.keys()].sort((a, b) => {
    if (arr1[a] !== arr1[b]) return arr1[a] - arr1[b];
    return a - b;
  });

  const sortedArr2 = Array(n);

  arr1SortedIndices.forEach((fromIdx, toIdx) => {
    sortedArr2[toIdx] = arr2[fromIdx];
  });

  return [sortedArr1, sortedArr2];
};

twoWaySort(arrA, arrB);
