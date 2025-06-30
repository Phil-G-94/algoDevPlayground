const decodeMorseCode = require("../js/strings/morseCode");

describe("decodeMorseCode", function () {
  it("should decode single letters", () => {
    expect(decodeMorseCode(".-")).toBe("A");
    expect(decodeMorseCode("-...")).toBe("B");
    expect(decodeMorseCode("-.-.")).toBe("C");
  });

  it("should decode simple words and phrases", () => {
    expect(decodeMorseCode(".... . -.--   .--- ..- -.. .")).toBe("HEY JUDE");
  });
});
