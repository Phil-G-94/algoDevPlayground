/*

Given a number `n`, determine if the number is prime or not

A prime number is a natural number greater than 1 that is not a product of two smaller numbers.

*/

function isPrimeNumber(n) {

    // if `n` is less than 2, it is a composite number - return false
    if (n < 2) {
        return false; // 1
    }

    // starting from i = 2, while i < n, increment i
    for (let i = 2; i < n; i++) {

        // if `n` modulo current value of i === 0, it is a composite number - return false

        if (n % i === 0) { // n
            return false;
        }
    }

    return true; // 1
}

console.log(isPrimeNumber(1));

console.log(isPrimeNumber(5));

console.log(isPrimeNumber(10456));

// Big-O: O(n + 2) => O(n) linear time complexity

/*

Optimised Primality Test

Integers larger than the square root do not need to be checked because
whenever `n = a * b`, one of the two `a` or `b` is <= the sqrt of `n`

*/

function optimisedIsPrimeNumber(n) {

    if (n < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

/*

Because we check based on the square root - `Math.sqrt()` -
we are working checking a much smaller number range than if we worked with a
natural number.

if n = 100, Math.sqrt(n) = 10

The optimisation means that time/space complexity increases,
but not in direct proportion to the input. This makes the time/space complexity O(logn) - logarithmic

*/