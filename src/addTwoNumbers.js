const addTwoNumbers = (a, b) => {
  if (typeof a == "string" || typeof b == "string") {
    return "invalid input, only numbers are allowed";
  } else if (a == null || b == null) {
    return "insert a second arguement";
  } else {
    return a + b;
  }
};
module.exports = addTwoNumbers;
