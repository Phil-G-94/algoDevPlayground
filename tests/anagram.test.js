const anagram = require("../js/strings/anagram");

describe("anagram", function () {
  it("should return true if arguments are an anagram. false otherwise.", function () {
    expect(anagram("silent", "listen")).toBe(true);
    expect(anagram("doom", "moody")).toBe(false);
    expect(anagram("silent", "eNlIST")).toBe(true);
  });
});