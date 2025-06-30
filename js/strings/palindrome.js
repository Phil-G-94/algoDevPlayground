function isPalindrome(str) {
  const lowRegStr = str.toLowerCase().replace(/[\W_]/g, "");
  const revLowRegStr = lowRegStr.split("").reverse().join("");

  return lowRegStr === revLowRegStr;
}

module.exports = isPalindrome;

console.log(isPalindrome("A man, a plan, a canal - Panama"));
console.log(isPalindrome("Madam, I'm Adam"));
console.log(isPalindrome("100001"));
console.log(isPalindrome("Greetings"));
