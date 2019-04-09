const {
  addIndefinite,
  addTwoNumbers,
  divideTwoNumbers,
  gitHubGetRepo,
  multiplyIndifinite,
  twoNumbersDiffernce,
  twoStringsConcat
} = require("../src/allModules");

describe("Adding Two Numbers", () => {
  it("should return sum of two Integers", () => {
    expect(addTwoNumbers(1, 1)).toBe(2);
  });

  it("should return sum of two floating point numbers", () => {
    expect(addTwoNumbers(0.1, 0.2)).toBeCloseTo(0.3);
  });

  it("should return 'invalid inputs, only numbers are allowed' if one argument is a string", () => {
    expect(addTwoNumbers("1", 1)).toMatch(
      /invalid input, only numbers are allowed/
    );
  });

  it("should return 'invalid inputs, only numbers are allowed' if both argument are strings", () => {
    expect(addTwoNumbers("1", "1")).toMatch(
      /invalid input, only numbers are allowed/
    );
  });
  it("should return 'insert a second arguement' if only one argument is parsed", () => {
    expect(addTwoNumbers(1)).toMatch(/insert a second arguement/);
  });
});
