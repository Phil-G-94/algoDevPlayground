const whoLikesIt = (arr) => {
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

module.exports = whoLikesIt;
