const cleanString = (str) => {
  return str.replace(/[^\w]+/gm, "").toLowerCase().split("").sort().join("");
};

const anagram = (strA, strB) => {
  return cleanString(strA) === cleanString(strB);
};

module.exports = anagram;
