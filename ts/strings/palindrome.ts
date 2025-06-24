const isPalindrome = (str: string): boolean => {
  const lowRegStr = str.toLowerCase().replace(/[\W_]/, ""); // lowercase the str + replace any char that's not a word char && underscores
  const reverseStr = lowRegStr.split("").reverse().join(""); // split, reverse, join str back together

  return reverseStr === lowRegStr; // deep equality comparison
};

console.log(isPalindrome("A man, a plan, a canal - Panama"));
console.log(isPalindrome("Madam, I'm Adam"));
