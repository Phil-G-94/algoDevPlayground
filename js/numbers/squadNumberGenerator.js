/**

At the start of each season, every player in a football team is assigned their own unique squad number.

Write a function generateNumber() that takes two arguments,
an array of the current squad numbers (squad) and the new player's desired number (n).
If the new player's desired number is not already taken, return n,
else if the desired number can be formed by adding two digits between 1 and 9,
return the number formed by joining these two digits together.
E.g. If 2 is taken, return 11 because 1 + 1 = 2. Otherwise return null.

Note: Often there will be several different ways to form a replacement number. In these cases the number with lowest first digit should be given priority. E.g. If n = 15, but squad already contains 15, return 69, not 78.

https://www.codewars.com/kata/5d62961d18198b000e2f22b3/solutions/javascript

*/

const squadNumberGenerator = (squad, n) => {
  if (!squad.includes(n)) return n;

  for (let a = 1; a <= 9; a++) {
    const b = n - a;

    if (b >= 1 && b <= 9) {
      const playerNumber = Number(`${a}${b}`);

      if (!squad.includes(playerNumber)) return playerNumber;
    }
  }

  return null;
};

module.exports = squadNumberGenerator;
