/**
 *
 * https://www.codewars.com/kata/5818c52e21a33314e00000cb/solutions/javascript

🔁 The Main Idea
You are given two integer arrays of the same length: arr1 and arr2.

You will:

Sort arr1 using the indices of arr2 in its ascending order.

Then sort arr2 using the indices of arr1 in its ascending order (original, not the one from step 1).

The "sorting" here doesn’t mean changing the order of values based on their own size. Instead, it means reordering one array (arr1) based on how the other array (arr2) would look if it were sorted, and vice versa.

 Step 1: Sort arr1 by the ascending order of arr2

 Step 2: Sort arr2 by the ascending order of original arr1

 arr1 = [5,4,3,2,1]
 arr2 = [6,5,7,8,9]

*/

const arrA = [5, 4, 3, 2, 1];
const arrB = [6, 5, 7, 8, 9];

const twoWaySort = (arr1, arr2) => {
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

module.exports = twoWaySort;