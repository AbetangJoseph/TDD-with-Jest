const addTwoNumbers = (num1, num2) => {
  if (typeof num1 == "string" || typeof num2 == "string") {
    return "invalid input, only numbers are allowed";
  } else if (num1 == null || num2 == null) {
    return "insert a second arguement";
  } else {
    return num1 + num2;
  }
};
module.exports = addTwoNumbers;
