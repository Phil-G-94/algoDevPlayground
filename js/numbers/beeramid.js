const beeramid = (bonus, price) => {

  let levels = 0;

  let remainingBonus = bonus;

  while (true) {

    let cost = (levels + 1) ** 2 * price;

    if (remainingBonus >= cost) {

      remainingBonus -= cost;

      levels++;
    } else {
      break;
    }
  }

  return levels;
};

module.exports = beeramid;