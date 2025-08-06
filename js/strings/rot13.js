const rot13 = (str) => {

  return str.replace(/[a-zA-Z]/g, (char) => {
    const base = char.match(/[A-Z]/) ? 65 : 97;

    return String.fromCharCode(
      ((char.charCodeAt(0) - base + 13) % 26) + base
    );
  });
};

module.exports = rot13;