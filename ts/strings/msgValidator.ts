/**
 *
 * @param inputStr
 * @returns {boolean}
 *
 * returns true if char count of a word in a given string matches the value of the number preceding it or if the string is empty
 * returns false otherwise
 *
 * regexp matches multiple, adjacent alpha-numeric chars
 * uses .exec method to return an array of values matched by regexp
 * iterates through the matches until it finishes the end of the given string (i.e., when regexp.exec(inputStr) === null)
 * pulls [1] - the numeral in the string - and coerces the type to Number using the Number() constructor
 * pulls [2] - the word in the string
 * returns false if word.length !== num
 * adds the total chars processing through valid (number, word) pairs to totalLength
 * if totalLength === inputStr.length, there are no leftover characters so we can return true
 * else, there are leftover chars (number without word, or vice versa) - return false;
 */

const msgValidator = (inputStr: string): boolean => {
  const regexp: RegExp = /(\d+)([a-zA-Z]+)/g;

  if (inputStr === "") return true;

  let match;
  let totalLength = 0;

  while ((match = regexp.exec(inputStr)) !== null) {
    const num = Number(match[1]);
    const word = match[2];

    if (word.length !== num) return false;

    totalLength += match[0].length;
  }

  return totalLength === inputStr.length;
};
