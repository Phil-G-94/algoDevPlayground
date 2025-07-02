const msgValidator = (inputStr) => {
  const regexp = /(\d+)([a-zA-Z]+)/g;

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
module.exports = msgValidator;
