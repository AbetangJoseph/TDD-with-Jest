module.exports = divideTwoNumbers = (num1, num2) => {
  if (typeof num1 == "string" || typeof num2 == "string") {
    return "fill all fields";
  } else if (num1 == null || num2 == null) {
    return "fill all fields";
  } else {
    return num1 / num2;
  }
};
