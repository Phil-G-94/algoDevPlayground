// given an integer, return an integer that is the reverse ordering of numbers
// reverseInt(15) === 51
// reverseInt(189) === 981
// reverseInt(-51) === -15 => reverse the numbers but not the sign
// reverseInt(500) === 5 => drop zeros

function reverseInt(int) {

    // cast to string,
    // split,
    // reverse,
    // join
    const reversedInt = int.toString().split("").reverse().join("");

    // parseFloat() to cast back to number
    // Math.sign(int) returns 1 for a positive number and -1 for a negative number so
    // * 1 || * -1 assigns our reversedInt with either positive or negative value respectively.
    return parseFloat(reversedInt) * Math.sign(int);
}
console.log(reverseInt(-31));
console.log(reverseInt(500));
console.log(reverseInt(-667));
console.log(reverseInt(0));

module.exports = reverseInt;

/*

own possible solution...pretty complicated and calls reverse() so will get more expensive with bigger inputs...
linear time/space

convert to string,
split,
slice from first non-operator index,
reverse,
join back again

unary + - operators to coerce string back to number


function reverseInt(int) {
    if (Math.sign(int) === 0) return 0;

    if (Math.sign(int) === -1) {
        return -int.toString().split("").slice(1).reverse().join("");
    } else {
        return +int.toString().split("").slice(0).reverse().join("");
    }
}


function reverseInt(int) {
    return Math.sign(int) === -1 ? -int.toString().split("").slice(1).reverse().join("") : +int.toString().split("").slice(0).reverse().join("");
}

*/