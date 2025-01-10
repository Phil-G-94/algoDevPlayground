// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0




const vowels = (str) => {

    // use regexp to match all occurrences of vowel chars
    // returns an array of all matches chars
    const matches = str.match(/[aeiou]/gi);

    // if matches is truthy (i.e is not null or 0), return the length of the array for the total number of vowels
    // otherwise return 0
    return matches ? matches.length : 0;
};

console.log(vowels("Why do you ask?"));
console.log(vowels("HI ThErE!"));

module.exports = vowels;

/*

own solution #1:

const vowels = (str) => {

    const vowelMap = ["a", "e", "i", "o", "u"];

    let count = 0;

    const lowercaseStr = str.toLowerCase();

    for (let char of lowercaseStr) {
        if (vowelMap.includes(char)) {
            count++;
        }
    }

    return count;
};

*/