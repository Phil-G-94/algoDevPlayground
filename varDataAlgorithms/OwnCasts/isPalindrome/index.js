// a str is a palindrome if it contains the same letters in sequence, forwards and backwards - `civic`, `radar` `rotor` `kayak`

// try nested loop - one to loop forwards and one to loop backwards and check each index against the other


const isPalindrome = (str) => {

    /* best

    mem efficient - O(1) extra space for variables
    fast - avoid reversing, which can be slower for longer strings
    can handle diverse inputs like phrases or mixed strings;
    */

    const sanitisedString = str.toLowerCase().replace(/[^a-z0-9]/g, ""); // remove all chars that !== lowercase chars or digits
    const stringLength = str.length;

    for (let i = 0; i < stringLength / 2; i++) {
        if (sanitisedString[i] !== sanitisedString[stringLength - i - 1]) return false; // bracket notation for accessing a character in a string at a specific position.
    }

    return true;
};

console.log(isPalindrome("abcdefg"));

module.exports = isPalindrome;

/*

own solution:

Issues

Two loops are redundant, the forward sequence is already contained in the arg `str`
+= Creates a new string for each operation, leading to O(n^2) complexity for long strings.

const isPalindrome = (str) => {

    // a str is a palindrome if it contains the same letters in sequence, forwards and backwards - `civic`, `radar` `rotor` `kayak`

    // try nested loop - one to loop forwards and one to loop backwards and check each index against the other

    let string = "";
    let reversedString = "";

    for (let char of str) {
        string = string + char;
    }

    for (let char of str) {
        reversedString = char + reversedString;
    }

    return string === reversedString;
};

#1
const isPalindrome = (str) => {

    const reversedStr = str
        .split("")
        .reverse()
        .join("");

    return str === reversedStr;
};

#2 using Array.prototype.every() - not ideal, carries out more comparisons than truly necessary - "double comparisons"

every() used to carry out a boolean check on every value in the array
it receives the current value as the first arg, and the current index as the second arg in the callback

const isPalindrome = (str) => {

    return str.split("").every((char, index) => {
        return char === str[str.length - i - 1];
    });
};

str[str.length - index - 1] is dynamically finding the character at the mirrored position from the end of the string. It’s what lets you compare the left and right sides of the string efficiently.

const isPalindrome = (str) => {

    return str.split("").every((char, index) => {
        return char === str[str.length - index - 1];
    });
};

*/