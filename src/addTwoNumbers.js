const addTwoNumbers = (a, b) => {
  return typeof a == "string" || typeof b == "string"
    ? "invalid inputs, only numbers are allowed"
    : a + b;
};
module.exports = addTwoNumbers;
