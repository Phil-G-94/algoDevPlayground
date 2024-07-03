/*

Problem: given integer `n`, find the factorial of that number

In mathematics, the factorial of a non-negative integer `n` - written as `n!` - is the product of multiplying all positive integers less than or equal to n.
The factorial of 0 is 1.
Theory: https://www.freecodecamp.org/news/what-is-a-factorial/#:~:text=A%20factorial%20is%20a%20mathematical,1%20(which%20%3D%206).
So,

4! => 4 x 3 x 2 x 1 = 24;

6! => 6 x 5 x 4 x 3 x 2 x 1 = 720

*/

function factorialRecursive(n) {

    // base case
    if (n === 0) {
        return 1;
    }

    // else, keep calling the function, multiplying n with (n - 1)
    return factorial(n - 1) * n;
}


const factorialIterative = (n) => {

    // base case
    let result = 1;

    // start iterator from `2`, because 2! => 2 * 1 = 2;
    for (let i = 2; i <= n; i++) {

        /*
        result = 1 * 2 // 2
        result = 2 * 3 // 6
        result = 6 * 4 // 24
        result = 24 * 5 // 120
        result = 120 * 6 // 720
        */

        result = result * i;
    }

    return result;
};

// Big-O: O(n) - linear

console.log(factorialIterative(6));