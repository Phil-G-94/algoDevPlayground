// only known Wilson primes are 5, 13, 563

const isWilsonPrime = (num) => {
  return num === 5 || num === 13 || num === 563 ? true : false;
};

console.log(isWilsonPrime(5));
console.log(isWilsonPrime(13));
console.log(isWilsonPrime(563));
console.log(isWilsonPrime(4));

module.exports = isWilsonPrime;
