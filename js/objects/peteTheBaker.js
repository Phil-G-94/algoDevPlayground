/**
 *
 * Write a function cakes() which takes a `recipe` object and the `available` ingredients object
 * and returns the maximum number of cakes Pete can bake (integer)
 *
 * Ingredients that are not present in the objects can be considered as 0
 *
 * https://www.codewars.com/kata/525c65e51bf619685c000059/solutions/javascript
 *
 */

const recipe = {
  flour: 500,
  sugar: 200,
  eggs: 1,
};

const ingredients = {
  flour: 1200,
  sugar: 1200,
  eggs: 5,
  milk: 200,
};

function cakes(recipe, ingredients) {
  let minBatches;
  const range = [];

  for (let recipeIngredient in recipe) {
    const requiredIngredients = recipe[recipeIngredient];
    const suppliedIngredients = ingredients[recipeIngredient];

    if (!ingredients[recipeIngredient]) return 0;

    if (recipe[recipeIngredient] === 0) continue;

    range.push(Math.floor(suppliedIngredients / requiredIngredients));
  }

  minBatches = Math.min(...range);

  return minBatches;
}
