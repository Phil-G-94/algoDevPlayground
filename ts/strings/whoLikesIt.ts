/**
 *
 * implement a fn that takes an array containing the names of people
 * that like an item
 *
 * return a string that display the people that liked an item
 * []                                -->  "no one likes this"
 * ["Peter"]                         -->  "Peter likes this"
 * ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
 * ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
 * ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
 * For 4 or more names, the number in "and 2 others" simply increases.
 *
 * https://www.codewars.com/kata/5266876b8f4bf2da9b000362/solutions/typescript
 */

const arr1 = ["Alex", "Jacob", "Mark", "Max"];
const arr2 = ["Joe"];
const arr3 = ["Tim", "Mark", "Steve"];

const whoLikesIt = (arr: string[]): string => {
  const [first, second, third] = arr;
  const rest = arr.length - 2;

  switch (arr.length) {
    case 0:
      return `no one likes this`;
    case 1:
      return `${first} likes this`;
    case 2:
      return `${first} and ${second} like this`;
    case 3:
      return `${first}, ${second} and ${third} like this`;
    default:
      return `${first}, ${second} and ${rest} others like this`;
  }
};

console.log(whoLikesIt(arr1));
console.log(whoLikesIt(arr2));

/**
 * #1
 *  const whoLikesIt = (arr: string[]): string => {
      let numOfRest: number;
      numOfRest = arr.slice(2).length;

      let result: string = "";

      if (arr.length === 0) {
        result = `no one likes this`;
      }

      if (arr.length === 1) {
        result = `${arr[0]} likes this`;
      }

      if (arr.length === 2) {
        result = `${arr[0]} and ${arr[1]} like this`;
      }

      if (arr.length === 3) {
        result = `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
      }

      if (arr.length >= 4) {
        result = `${arr[0]}, ${arr[1]} and ${numOfRest} others like this`;
      }

      return result;
     };
 *
 *
 */

/**
 *
 * switch (arr.length) {
    case 0:
      return `no one likes this`;
    case 1:
      return `${arr[0]} likes this`;
    case 2:
      return `${arr[0]} and ${arr[1]} like this`;
    case 3:
      return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
    default:
      return `${arr[0]}, ${arr[1]} and ${arr.length - 2 } others like this`;
  }
 *
 *
 */
