const licensePlateGenerator = require("../js/strings/licensePlateGenerator");

describe("licensePlateGenerator", () => {
  it("should pass sample tests", () => {
    const mockDataOne = ["John", "James", "Smith", "01-Jan-2000", "M"];
    const mockDataTwo = ["Johanna", "", "Gibbs", "13-Dec-1981", "F"];
    const mockDataThree = ["Andrew", "Robert", "Lee", "02-September-1981", "M"];

    expect(licensePlateGenerator(mockDataOne)).toEqual("SMITH001010JJ9AA");
    expect(licensePlateGenerator(mockDataTwo)).toEqual("GIBBS862131J99AA");
    expect(licensePlateGenerator(mockDataThree)).toEqual("LEE99809021AR9AA");
    expect(licensePlateGenerator()).toBeUndefined();
  });
});
