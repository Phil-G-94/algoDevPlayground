// Given a String,
// return the character most commonly used in the string
// --- Examples
// maxChars("abccccccd") === "c"

const maxChars = (str) => {

    const characterMap = {};
    let maxChar;

    for (const char of str) {
        characterMap[char] ? characterMap[char]++ : characterMap[char] = 1;
    }

    maxChar = Object
        .entries(characterMap)
        .reduce((currentMaxChar, [key, value]) => characterMap[currentMaxChar] > value ? currentMaxChar : key, Object.keys(characterMap)[0]);

    return `The most frequently occuring character in this string is ${maxChar}`;
};


console.log(maxChars("Hello There"));

module.exports = maxChars;

// solution may also solve other string related q's

// most common char in string ?
// does string A have the same chars as string B ? (anagram)
// doest the given string have any repeated chars in it ?

// character map solution

// const maxChars = (str) => {

//     const chars = {};


//     for (const char of str) {

//         // iterate through string
//         // add char to new object

//         // longform;
//         if (!chars[char]) {
//             chars[char] = 1;
//         } else {
//             chars[char]++;
//         }

//         // shortform
//         // chars[char] = chars[char] + 1 || 1;

//         // alternative shortform
//         // !chars[char] ? chars[char] = 1 : chars[char]++;
//     }

//     // convert object into an array of arrays - each holding a key value pair
//     const entries = Object.entries(chars);

//     // set the `key` of the first key/value pair array as the maxChar -> most frequently occuring character in the string
//     let maxChar = entries[0][0];

//     console.log(maxChar);

//     // loop over the array of arrays, extracting their key:value pairs
//     for (const [key, value] of entries) {
//         // if the `value` we extract from loop is higher than the value of our maxChar `key`, assign the corresponding `key` to maxChar
//         if (value > chars[maxChar]) { maxChar = key; }
//     }

//     // otherwise return maxChar, it's the most frequently occuring character in the string
//     return maxChar;

//     /* alternative shortform */

//     // return Object
//     //     .entries(chars)
//     //     .reduce(
//     //         (maxValueKey /* current key with highest value as we iterate */, [key, value] /* current key, value pair being processed */) => chars[maxValueKey] > value ? maxValueKey : key, Object.keys(chars)[0]);
// };

