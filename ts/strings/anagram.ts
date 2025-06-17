const cleanString = (str: string): string => {
  return str.replace(/[^\w]/, "").toLowerCase().split("").sort().join("");
};

const anagram = (strA: string, strB: string): boolean => {
  return cleanString(strA) === cleanString(strB);
};
