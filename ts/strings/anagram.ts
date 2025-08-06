const cleanString = (str: string): string => {
  return str
    .replace(/[^\w]+/gm, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
};

const anagram = (strA: string, strB: string): boolean => {
  return cleanString(strA) === cleanString(strB);
};
