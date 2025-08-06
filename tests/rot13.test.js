const rot13 = require("../js/strings/rot13");

describe("rot13", () => {
  it("should return a string", () => {
    expect(typeof rot13("Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.")).toBe("string");
  });

  it("should code a rot13 cypher back to a legible string", () => {
    expect(rot13("Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.")).toBe("In the elevators, the extrovert looks at the OTHER guy's shoes.");
    expect(rot13("EBG13 rknzcyr.")).toBe("ROT13 example.");
  });

  it("should only substitute chars - not spaces, punctuation, or numbers", () => {
    expect(rot13("This is my first ROT13 excercise!")).toBe("Guvf vf zl svefg EBG13 rkprepvfr!");
  });
});