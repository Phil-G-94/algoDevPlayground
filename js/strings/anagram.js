const cleanString = (str) => {
  return str.replace(/[^\w]/, "").toLowerCase().split("").sort().join("");
};

const anagram = (strA, strB) => {
  return cleanString(strA) === cleanString(strB);
};