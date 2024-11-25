/*
Problem:

Given a positive integer `n`, determine if the `n` is a power of `y` or not.
An integer is a power of Three if there exists an integer `n` such that `n` === 2^x

An integer `n` is a power of `y` if `n` === y^x

If you can divide `n` by `y` repeatedly and reduce it to 1 without leaving a remainder, then `n` is a power of `y`
Otherwise it isn't

*/


/*

Logarithmic time/space complexity solutions

time complexity O(logn) - where `n` is the value of the `result` input
because the number of executions - that is, iterations of the while loop - increase as `n` grows,
but not proportionally (because we divide `n` with each iteration of the loop)

const resultIsPowerOfBase = (result, base) => {

    if (result === 1) return true; // any base^0 is 1
    if (base <= 1) return result === 1; // only 1^n (where `n` is a positive integer) can equal 1
    if (base === 0) return false; // No positive number raised to a power gives 0

    while (result > 1) {
        // if result modulo base doesn't yield a remainder of zero, it result cannot be a power of base - return false
        if (result % base !== 0) return false;

        result /= base;
    }

    return true;

};

const isPowerOfThree = (n) => {
    if (n < 1) return false;

    while (n > 1) {
        if (n % 3 !== 0) return false;

        n /= 3;
    }

    return true;
};

*/

/*

Constant time/space complexity solution

`&` - Bitwise AND compares each bit of the two numbers and returns 1 if both bits are 1, otherwise returns 0

This works for power of 2, because a power of 2 alwayus has exactly one bit set to 1 and all other bits are zero:

2^0 = 1: 0001 in binary;
2^1 = 2: 0010 in binary;
2^2 = 4: 0100 in binary;
2^3 = 8: 1000 in binary;

This function is a quick way to check if a number is a power of 2 using bitwise operations, but it doesn't handle powers of other bases.
If we want to extend it to check powers of a different base, we need to use logarithms or module operator + repeated division.

*/

const resultIsPowerOfTwoBitwise = (result) => {
    if (result < 1) return false;

    return (result & (result - 1)) === 0;
};

