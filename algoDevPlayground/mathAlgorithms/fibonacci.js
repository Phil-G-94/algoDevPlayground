/*

Given a number `n`, find the first `n` elements of the Fibonacci sequence

Fibonacci sequence is a sequence in which each number is the sum of the two preceeding ones
The first two numbers in the sequence are 0 and 1, therefore:

fibonacci(2) = [0, 1]

fibonacci(4) = [0, 1, 1, 2]

fibonacci(5) = [0, 1, 1, 2, 3]

fibonacci(6) = [0, 1, 1, 2, 3, 5]

*/

function fibonacci(n) {

    // since we know the starting values, we can store in constant
    const fib = [0, 1];

    // then set our for loop to iterate starting with i[2]
    for (let i = 2; i <= n; i++) {

        // populating the fib array with the sum of previous values fib[i - 1] and fib[i - 2]
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib;

    // .filter((element) => element % 2 !== 0 && element <= n).reduce((acc, currentVal) => acc + currentVal, 0) we can chain the following to filter out any odd number and sum them up
}

console.log(fibonacci(4));

// Big-O: O(n) - linear