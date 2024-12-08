
const capitalise = (str) => {

    // capitalise the first letter...
    let result = str[0].toUpperCase();

    for (let i = 1; i < str.length; i++) {
        // if the char left of the currentChar is a space, capitalise the currentChar (first letter in a word)
        if (str[i - 1] === " ") { result += str[i].toUpperCase(); }
        // otherwise, add it to the string (remaining letters in a word)
        else { result += str[i]; }
    }

    return result;
};

console.log(capitalise("Hey, how goes it?!"));

module.exports = capitalise;

/* #0 for...of */

// // match any character that is not a word or punctuation character, replace it with a whitespace
// // split into array
// const sanitiseAndSplit = (str) => {
//     return str.replace(/[^\w\p{P}]/gu && /[\s]/, " ").split(" ");
// };


// const capitalise = (str) => {

//     const sanitisedStr = sanitiseAndSplit(str);
//     let capitalisedString = "";

//     for (let word of sanitisedStr) {
//         word = word.replace(/\^w/g, word[0].toUpperCase() + " "); // capitalise each first letter and add whitespace
//         capitalisedString = capitalisedString + word; // concatenate to capitalisedString
//     }

//     return capitalisedString.trim(); // remove whitespace at start and end of string
// };

/* #1 map() */

// // match any character that is not a word or punctuation character, replace it with a whitespace
// // split into array
// const sanitiseAndSplit = (str) => {
//     return str.replace(/[^\w\p{P}]/gu && /[\s]/, " ").split(" ");
// };

// const capitalise = (str) => {

//     const sanitisedStr = sanitiseAndSplit(str); // sanitise string and split into array of words

//     // return a shallow copy of the array using `map()` where we replace
//     // the first letter of each word with its UpperCase counterpart
//     // joined back into string
//     return sanitisedStr.map(word => word.replace(/^\w/g, word[0].toUpperCase())).join(" ");
// };

/* #2 map() */

// const capitalise = (str) => {
//     return str.split(" ").map(word => word.replace(/\w/, word[0].toUpperCase())).join(" ");
// };

/* #3 alternative for...of */

// const capitalise = (str) => {
//     const words = [];

//     for (let word of str.split(" ")) {
//         words.push(word[0].toUpperCase() + word.slice(1));
//     }

//     return words.join(" ");
// };