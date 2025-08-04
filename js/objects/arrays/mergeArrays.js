/**

You are given two sorted arrays that contain only integers. These arrays may be sorted in either ascending or descending order. Your task is to merge them into a single array, ensuring that:

The resulting array is sorted in ascending order.

Any duplicate values are removed, so each integer appears only once.

If both input arrays are empty, return an empty array.

No input validation is needed, as both arrays are guaranteed to contain zero or more integers.

[1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

https://www.codewars.com/kata/5899642f6e1b25935d000161/solutions/javascript?filter=all&sort=best_practice&invalids=false

*/

const arrX = [1, 3, 5, 7, 9, 11, 12];
const arrY = [1, 2, 3, 4, 5, 10, 12];

/** #1 */
// const mergeArrays = (a, b) => {
//   const set = new Set([...a, ...b]);

//   return [...set].sort((a, b) => a - b);
// };

/** #2 */
// const mergeArrays = (a, bx) => {
//   const set = new Set();

//   for (const val of a) set.add(val);

//   for (const val of b) set.add(val);

//   return [...set].sort((x, y) => x - y);
// };

/** #3 */
const mergeArrays = (a, b) => {
  if (Array.isArray(a) !== true || Array.isArray(b) !== true)
    throw new Error("Both parameters must be arrays.");

  return a
    .filter((item) => !b.includes(item))
    .concat(b)
    .sort((x, y) => x - y);
};

console.log(mergeArrays(arrX, arrY));

module.exports = mergeArrays;