function twoStringsConcat(str1, str2) {
  if (arguments.length == 0) {
    return "invalid, fields cannot be empty";
  } else if (typeof str1 !== "string" || typeof str2 !== "string") {
    return "only letters are allowed";
  } else if (str1.trim() == "" || str2.trim() == "") {
    return "both fields are required";
  } else {
    return str1 + " " + str2;
  }
}
module.exports = twoStringsConcat;
