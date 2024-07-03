# algoDevPlayground

Repo for storing DSA work

## Algorithm Fundamentals

A set of well defined instructions to solve a particular problem (recipe analogy).

Input => Algorithm => Output

Characteristics of algorithms:

-   Well defined inputs / outputs
-   Each step should be clear and unambigous
-   Language independent

Always multiple ways to solve a problem.
An algorithm is simply a way of solving a particular problem in a particular way. Each algorith will also have a tradeoff we should keep in mind.

## Measuring Algorithms: Time and Space Complexity

Absolute running time of an algorith is difficult to predict. It can depend on:

-   The programming language used to implement the algorithm
-   The computer the program runs on
-   Other programs running at the same time

We evaluate an algorithm _in terms of its input size_

_Time Complexity_ - Amount of time taken by an algo to run, as a function of its input size

_Space Complexity_ - Amount of memory taken by an algorithm to run, as a function of its input size

### Representing Time/Space Complexity

Using _asymptotic notations_

1. Big-O notation (O-notation) - Worst case complexity
2. Omega notation - Best case complexity
3. Theta notation - Average case complexity

We are primarily concerned with Big-O

## Big-O Notation

Describes algo complexity using algebraic terms

It is expressed in terms of input, and focuses on bigger picture

### Big-O Time Complexity

Count the number of times a statement executes based on the input size

Example code;

```
Problem: Summation of first n natural numbers

function summation(n) {
    let sum = 0; // executes once

    for (let i = 0; i <= n; i++) {
        sum += i; // executes `n` times
    }

    return sum; // executes once
}

```

We can express this algebraically as `n + 2` where `n` is the input to the function. So:

-   if summation(4) then 4 + 2,
-   if summation(10) then 10 + 2,

Time complexity is purely dependent on input size.

If we consider the above, we can easily see that if n = 100,000,000 then the `+ 2` will have an insignificant impact on performance. Thinking bigger picture, we can
simply categorise the above as `n` (and drop the `+ 2`) since `n` will have a much more significant impact on performance.

The above would thus be described as having `O(n)` time complexity, which is also known as `linear` tc.

For loops, because they iterate over every input, time complexity is usually linear. There are probably some exceptions with different looping methods?

```
function summation(n) {
    return (n * (n + 1)) / 2;
}
```

Here, the time complexity is `O(1)` - also known as `constant` tc.

2x Nested `for` loops are `O(n^2)` - also known as `quadratic` tc.
3x Nested `for` loops are `O(n^3)` - `cubic` tc.
If input size reduces by half every iteration, it is `O(logn)` - `logarithmic` tc.

### Big-O Space Complexity

If algo doesn't require additional memory or if memory needed isn't dependant on input size, the space complexity is `O(1)` / `constant`. Example: sorting algorithm that sorts an array in place w/o utilising an additional array.

If additional memory needed grows as input size grows, the space complexity is `O(n)` / `linear`

If additional memory needed grows disproportionally to input size (lower or higher), the space complexity is `O(logn)` / `logarithmic`

Quadratic time complexity is ok. Quadratic space complexity is not.

### HELP:

https://www.reddit.com/r/computerscience/comments/s7h2vc/can_someone_explain_to_me_big_o_notation_like_im/#:~:text=The%20focus%20of%20Big%20O,slowest%20part%20of%20an%20algorithm

### Big-O: The Time/Space Complexity of Objects {} and their methods

Objects are not ordered.

Insert, Remove, Access all have O(1) | constant complexity;

Search O(n) | linear; worst case, you may have to search _all_ the properties to find the one you're looking for. the more properties, the longer it will take.

Object.keys(), Object.values(), Object.entries() all have O(n) linear TC.

### Big-O: The Time/Space Complexity of Arrays [] and their methods

Arrays are ordered (zero-indexed)

insert / remove element at end of array - i.e. `.push()` | also pop - O(1) constant

insert / remove at beginning of the array - i.e. `.shift()` or `.unshift()` | also concat, splice, slice - O(n) linear, because the index has to be reset for every element in the array

access - O(1) constant - since ordered, there is no difference between `i[0]` and `i[100000]`
search - O(n) linear

forEach / map / filter / reduce - O(n) linear

If, for example, your solution includes:

```
.forEach( () => {
    for (let i = 0; i <= x; i++) {

    }
} )

```

your T/S complexity will be `quadratic`, as you've solved with a nested loop

## Math Algorithms

### [Fibonacci sequence](algoDevPlayground/mathAlgorithms/fibonacci.js)

### [Factorial of a number](algoDevPlayground/mathAlgorithms/fibonacci.js)

### Prime number

### Power of two

### Recursion

### Fibonacci w/ recursion

### Factorial of a number w/ recursion
