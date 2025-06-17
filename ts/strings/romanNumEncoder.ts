function romanNumEncoder(num: number): string {
  // take a positive integer between 1 and 3999 and return a string containing the Roman Numeral representation of that number

  let result = "";

  const map = new Map();

  map.set("M", 1000);
  map.set("CM", 900);
  map.set("D", 500);
  map.set("CD", 400);
  map.set("C", 100);
  map.set("XC", 90);
  map.set("L", 50);
  map.set("XL", 40);
  map.set("X", 10);
  map.set("IX", 9);
  map.set("V", 5);
  map.set("IV", 4);
  map.set("I", 1);

  if (num <= 0 || num > 3999) return `No Roman numeral representation`;

  for (const [key, value] of map) {
    while (num >= value) {
      num -= value;

      result += key;
    }
  }

  return result;
}

console.log(romanNumEncoder(2)); /* "MDCLXVI" "1000 500 100 50 10 5 1" */
