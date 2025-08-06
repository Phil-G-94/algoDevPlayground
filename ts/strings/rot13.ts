/**
Implement a ROT13 cypher: https://en.wikipedia.org/wiki/ROT13
It should substitute every letter in a string with the 13th letter after it in the Latin alphabet
Only substitute chars, not spaces, punctuation, or numbers

"EBG13 rknzcyr." -> "ROT13 example."

"This is my first ROT13 excercise!" -> "Guvf vf zl svefg EBG13 rkprepvfr!"

https://www.codewars.com/kata/52223df9e8f98c7aa7000062/solutions/javascript

*/

/** @param str {string}  */

const rot13 = (str: string): string => {
  return str.replace(/[a-zA-Z]/g, (char) => {
    const base = char.match(/[A-Z]/) ? 65 : 97; // check if char is upper or lowercase

    /* (char.charCodeAt(0) - base + 13) -> convert letter to a 0 - 25 index and shift it 13 chars fwd */
    /* % 26 -> wrap around the alphabet */
    /* + base -> convert the rotated index back into the correct ASCII code for a letter */
    return String.fromCharCode(((char.charCodeAt(0) - base + 13) % 26) + base);
  });
};
