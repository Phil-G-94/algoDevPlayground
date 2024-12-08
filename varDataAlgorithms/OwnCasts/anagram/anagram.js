// given two strings, check if the strings are anagrams of each other
// a string is an anagram of another if it uses the same characters in the same quantity
// only consider characters - not spaces or punctuation
// consider capital letters to be the same as lowercase

// Examples
// anagram("rail safety", "fairly tales") => true
// anagram("Hi there", "Bye there") => false
// anagrams("RAIL! SAFETY!", "FAIRY TALES") => true

const sanitise = (string) => string.replace(/[^\w]/g, "").toLowerCase();

const buildCharMap = (str) => {
    const charMap = {};

    for (const char of sanitise(str)) {
        charMap[char] = (charMap[char] || 0) + 1;
    }

    return charMap;
};

const anagram = (stringA, stringB) => {

    const charMapA = buildCharMap(stringA);
    const charMapB = buildCharMap(stringB);

    // don't have the same number of chars
    // return false
    if (Object.keys(charMapA).length !== Object.keys(charMapB).length) return false;

    // iterate over one frequency map and check if all its chars match with other frequency map
    for (let char in charMapA) {
        return charMapA[char] === charMapB[char]; // return true if all chars match
    }

    // false otherwise, implicit return

};

module.exports = anagram;

/* SOLUTIONS */

/* #0 */

// const sanitise = (string) => string.replace(/[^\w]/g, "").toLowerCase();

// const buildCharMap = (str) => {
//     const charMap = {};

//     for (const char of sanitise(str)) {
//         charMap[char] = (charMap[char] || 0) + 1;
//     }

//     return charMap;
// };

// const anagram = (stringA, stringB) => {

//     const charMapA = buildCharMap(stringA);
//     const charMapB = buildCharMap(stringB);

//     // don't have the same number of chars
//     // return false
//     if (Object.keys(charMapA).length !== Object.keys(charMapB).length) return false;

//     // iterate over one frequency map and check if all its chars match with other frequency map
//     for (let char in charMapA) {
//         return charMapA[char] === charMapB[char]; // return true if all chars match
//     }

//     // false otherwise, implicit return

// };

/* #1 */

// const anagram = (stringA, stringB) => {

//     // use regexp to remove punctuation and spaces
//     const sanitise = (string) => string.replace(/[^\w]/g, "").toLowerCase();


//     // sanitise
//     const sanitisedA = sanitise(stringA);
//     const sanitisedB = sanitise(stringB);

//     let charMapA = {};
//     let charMapB = {};

//     // create char maps
//     for (let char of sanitisedA) {
//         !charMapA[char] ? charMapA[char] = 1 : charMapA[char]++;
//     }

//     for (let char of sanitisedB) {
//         !charMapB[char] ? charMapB[char] = 1 : charMapB[char]++;
//     }

//     // extract keys and sort properties for easier comparison
//     const sortedA = Object.keys(charMapA).sort();
//     const sortedB = Object.keys(charMapB).sort();

//     // loop through one sorted object and compare each of its indices with the other objects
//     for (let i = 0; i < sortedA.length; i++) {
//         // if not equal, false
//         if (sortedA[i] !== sortedB[i]) return false;
//     }

//     // otherwise true;
//     return true;
// }
//     /*

//     Passes tests but shite.

//     ISSUES:

//     Sorting issue:
//     Sorting object keys isn't necessary to determine of two strings are anagrams.
//     We just need to compare the frequency of characters.

//     Incomplete validation:
//     Above solution checks only if the keys match. Does NOT check if their counts do.

//     Redundancy:
//     We don't need to create two separate char maps that we then sort...

//     Return value:
//     We should return `false` if the strings differ in length after sanitisation. The above solution doesn't.

//     */

// };

/* #2 */

// Improvement to O(n)
// Avoid sorting object keys
// Validates that key counts match as well as the keys themselves
// Only needs one charMap
// Returns false right away if strings differ in length after sanitisation

// const anagram = (stringA, stringB) => {

//     const sanitise = (str) => str.replace(/[^\w]/, "").toLowerCase();

//     const sanitisedA = sanitise(stringA);

//     const sanitisedB = sanitise(stringB);

//     if (sanitisedA.length !== sanitisedB.length) return false; // cannot be anagram if .length !==

//     // frequency map
//     const charMap = {};

//     // build up the frequency map
//     for (const char of sanitisedA) {
//         charMap[char] = (charMap[char] || 0) + 1; // supposedly more idiomatic, and certainly more concice than
//         // if sanitisedA[char] is falsy, meaning it === undefined || 0, we use 0 as default value and add 1
//         // otherwise if truthy, meaning it === 1 or more, we add 1
//     }

//     // check if sanitisedB can match the character counts in sanitisedA

//     for (const char of sanitisedB) {
//         if (!charMap[char]) return false; // return false if sanitisedB doesn't match sanitisedA, i.e. contains an extra char
//         charMap[char]--; // every time a sanitisedB char matches a sanitisedA char, decrement the value in our frequency map
//     }

//     // verifies that all values in the charMap are `0`, meaning all chars have
//     // been accounted for
//     return Object.values(charMap).every(count => count === 0);

// };

/* #3 */

// const sanitiseAndSort = (str) => str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");

// const anagram = (stringA, stringB) => {

//     const sanitisedA = sanitiseAndSort(stringA);
//     const sanitisedB = sanitiseAndSort(stringB);

//     if (sanitisedA.length !== sanitisedB.length) { return false; }

//     return sanitisedA === sanitisedB;

// };


// console.log(anagram("Hello", "lloHe"));

// module.exports = anagram;

