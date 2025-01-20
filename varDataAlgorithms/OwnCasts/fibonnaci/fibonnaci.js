// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


const memoize = (fn) => {

    const cache = {};

    // represents the fn we pass in to memoize()
    return function (...args) {

        // `...args` to allow for unknown no. of arguments

        // checks if cache obj already contains any of the args
        // if so, return the value of the arg
        if (cache[args]) {
            return cache[args];
        }

        // making it past the `if` means we've never called the fn with that arg before, that is - that value hasn't been computed

        const result = fn.apply(this, args); // whenever you call a function with an arr of arguments (i.e. args) we have to use the `apply()` helper

        // store the result of the above computation into our cache and return it
        // the next time the fn is called with the same argument as previously computed it will return within our `if` check
        cache[args] = result;

        return result;
    };
};

const slowFib = (n) => {

    // base case

    if (n < 2) return n;

    return fib(n - 1) + fib(n - 2); // recursively call the memoized version of the fib function

};

// call our memoize function, passing our recursive fib function as the arg
const fib = memoize(slowFib);

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

/* fib #1 - recursive, O(2 ^ n) exponential time

    for every increase in N we get a dramatic increase in the amount of function calls we make

    const fib = (n) => {

        // base case

        if (n < 2) return n;

        // keep calling fib(n - 1) + fib (n - 2), until their sum < 2
        // keep adding the result of those calls where sum < 2 until
        // it equals a discrete number that is nth in the fibonnaci sequence
        return fib(n - 1) + fib(n - 2);
    };

*/

/* fib #2 - memoized recursion


        improvement on recursive solution - *memoization*

        store the argumnets of each function call along with the result
        if the function is called again with the same arguments, return the precomputed result instead of running the function again

        dramatically reduces the runtime complexity of the recursive solution


        const memoize = (fn) => {

            const cache = {};

            // represents the fn we pass in to memoize()
            return function (...args) {

                // `...args` to allow for unknown no. of arguments

                // checks if cache obj already contains any of the args
                // if so, return the value of the arg
                if (cache[args]) {
                    return cache[args];
                }

                // making it past the `if` means we've never called the fn with that arg before, that is - that value hasn't been computed

                const result = fn.apply(this, args); // whenever you call a function with an arr of arguments (i.e. args) we have to use the `apply()` helper

                // store the result of the above computation into our cache and return it
                // the next time the fn is called with the same argument as previously computed it will return within our `if` check
                cache[args] = result;

                return result;
            };
        };

        const slowFib = (n) => {

            // base case

            if (n < 2) return n;

            return fib(n - 1) + fib(n - 2); // recursively call the memoized version of the fib function

        };

        // call our memoize function, passing our recursive fib function as the arg
        const fib = memoize(slowFib);

*/