
// given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size (the number of elements that go into each chunk)
// chunk([1, 2, 3, 4], 2) => [[1, 2], [3,4]]
// chunk([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]

// const arr = [1, 2, 3, 4];

const chunk = (array, size) => {

    const chunkArray = [];
    let index = 0;
    while (index < array.length) {
        chunkArray.push(array.slice(index, index + size));
        index += size;
    }

    return chunkArray;
};

chunk([1, 2, 3, 4, 5, 6, 7, 8], 2);

module.exports = chunk;

/* solutions */

// #1
// const chunk = (array, size) => {

//     let chunkArray = [];

//     for (let i = 0; i < array.length; i += size) {
//         // each time we loop
//         // we increment `i` by the value of size
//         // and create a shallow copy of a portion of the array arg
//         // the portion that we copy starts at the index === current value of `i` in the loop
//         // and ends at the index === current value of `i + size` - 1 as end is not included in slice
//         // first loop `i` === 0 ; array.slice(0, 2) => chunkArray[[1, 2]]
//         // second loop `i` === 2 ; array.slice(2, 4) => chunkArray[[1, 2], [3, 4]]
//         // third loop `i` === 4 ; array.slice(4, 6) => chunkArray[[1, 2], [3, 4], [5, 6]]
//         // fourth loop `i` === 6 ; array.slice(6, 8) => chunkArray[[1, 2], [3, 4], [5, 6], [7,8]]

//         console.log(`the current value of "i" is ${i}`);
//         console.log(`the current value of calling "array.slice(i, i + size)" is ${array.slice(i, i + size)}`);

//         chunkArray.push(array.slice(i, i + size));
//     }

//     return chunkArray;
// };

// #2
// const chunk = (array, size) => {

//     const chunkArray = [];

//     // for each element in `array`
//     for (let element of array) {
//         // create a `lastElement` that is === to the last element in the chunkArray
//         // will return `undefined` if empty
//         let lastElement = chunkArray[chunkArray.length - 1];

//         // if `undefined` or if lastElement already contains the required amount of elements for a chunk
//         if (!lastElement || lastElement.length === size) {

//             // push a new chunk in
//             chunkArray.push([element]);
//         } else {

//             // otherwise add to existing chunk
//             lastElement.push(element);
//         }

//         console.log(chunkArray);
//     }

//     return chunkArray;

// };

// #3 do...while version of #1
// const chunk = (array, size) => {

//     const chunkArray = [];
//     let index = 0;
//     do {
//         chunkArray.push(array.slice(index, index + size));
//         index += size;
//     } while (index < array.length);

//     return chunkArray;
// };

//#4 while loop
// const chunk = (array, size) => {

//     const chunkArray = [];
//     let index = 0;
//     while (index < array.length) {
//         chunkArray.push(array.slice(index, index + size));
//         index += size;
//     }

//     return chunkArray;
// };