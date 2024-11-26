// "use strict";

const reverseString = (str) => {

    let reversedString = "";

    for (let char of str) {

        reversedString = char + reversedString;
    }

    return reversedString;
};

console.log(reverseString("apple"));

module.exports = reverseString;

/*

Other solutions:

    #1
    //

    return str.split("").reduce((rev, char) => char + rev, "");

    //

    #2
    // return str.split("").reverse().join("")

    #3
    //
    let reversedString = "";

    for (let i = str.length - 1; i >= 0; i--) {
         reversedString += str[i];
    }

    return reversedString;
    //

    #4

    //

    const reverseString = (str) => str.split("").reverse().join("");

    //

    #5

    //

    let reversedString = "";

    for (let char of str) {

        reversedString = char + reversedString;

    }

    return reversedString;

    //

*/