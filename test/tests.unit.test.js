const {
  addIndifinte,
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
    expect(addTwoNumbers(0.1, 0.2)).toBe(0.3);
  });

  it("should return error-message if strings are found", () => {
    expect(addTwoNumbers("1", 1)).toMatch(/not valid/);
  });
});
