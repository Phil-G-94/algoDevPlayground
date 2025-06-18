/**
 *
 * create a function that returns true if a given NUM is a Wilson prime
 * false otherwise
 *
 * What is a Wilson prime?
 *
 * A special kind of prime number
 *
 * How do I check for it?
 *
 * check if num is prime,
 * if it is:
 *  multiply all the numbers from 1 to p - 1 (factorial of p - 1)
 *  add 1 to result
 *  check if the result can be divided by p * p
 *
 * Function structure
 *
 */
const isPrime = (num: number) => {
  if (num <= 1) return false; // any number less than or equal to 1 is not prime

  if (num === 2) return true; // 2 is prime (and the only even prime)

  if (num % 2 === 0) return false; // even numbers > 2 are definitely not prime

  // so we start from 3, up to i <=  Math.sqrt(num), +=2 so you skip all even numbers

  const numSqrt = Math.sqrt(num);

  for (let i = 3; i <= numSqrt; i += 2) {
    if (num % i === 0) return false; // does i divide num evenly with no remainder | is `i` a factor of `num`?
  }

  return true; // is prime number
};

const isWilsonPrime = (num: number): boolean => {
  if (!isPrime(num)) {
    console.log(`${num} is not a prime number - cannot be a Wilson prime.`);
    return false;
  }

  let result: bigint = 1n;
  const numSquared = BigInt(num * num);

  // compute factorial
  for (let i = 1n; i <= BigInt(num - 1); i++) {
    result *= i;
  }

  if ((result + 1n) % numSquared !== 0n) {
    console.log(`${num} is not a Wilson prime`);
    return false;
  }

  console.log(`${num} is a Wilson prime.`);
  return true;
};

// Wilson primes - 5, 13, 563

isWilsonPrime(5);
isWilsonPrime(13);
isWilsonPrime(563);
