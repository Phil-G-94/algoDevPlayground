// only known Wilson primes are 5, 13, 563

const isWilsonPrime = (num) => {
  return num === 5 || num === 13 || num === 563 ? true : false;
};

module.exports = isWilsonPrime;
