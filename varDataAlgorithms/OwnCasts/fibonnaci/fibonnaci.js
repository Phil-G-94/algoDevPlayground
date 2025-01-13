// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

const fib = (n) => {

    // base case

    if (n < 2) return n;

    // keep calling fib(n - 1) + fib (n - 2), until their sum < 2
    // keep adding the result of those calls where sum < 2 until
    // it equals a discrete number that is nth in the fibonnaci sequence
    return fib(n - 1) + fib(n - 2);
};

console.log(fib(20));

module.exports = fib;

/* fib #0 - iterative, O(n):

const fib = (n) => {

    let fibArray = [0, 1];

    for (let i = 2; i <= n; i++) {
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }

    return fibArray[n];
};

*/

/* fib #1 - recursive


*/