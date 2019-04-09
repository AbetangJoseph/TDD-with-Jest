module.exports = function addIndefinite() {
  let res = 0;
  if (!arguments.length) {
    return "input cannot be empty";
  } else if (arguments.length >= 1) {
    for (var i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] != "number") {
        return "invalid, only numbers are allowed";
      } else {
        res += arguments[i];
      }
    }
    return res;
  }
};
