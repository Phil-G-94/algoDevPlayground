/**
 *
 * https://www.codewars.com/kata/51e04f6b544cf3f6550000c1/solutions/javascript
 *
 * @param {number} bonus
 *
 * @param {number} price
 *
 * @returns {number}
 */

const beeramid = (bonus: number, price: number): number => {
  let levels = 0;

  let remainingBonus = bonus;

  while (true) {
    let cost = (levels + 1) ** 2 * price; // calculate cost per level, keeping track of previous level

    if (remainingBonus >= cost) {
      remainingBonus -= cost; // subtract cost per level from remainingBonus
      levels++;
    } else {
      break;
    }
  }

  return levels;
};

console.log(beeramid(1500, 2));
