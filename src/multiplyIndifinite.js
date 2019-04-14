module.exports = function multiplyIndifinite() {
  let res = 1;
  if (!arguments.length) {
    return "fill all fields";
  } else if (arguments.length >= 1) {
    for (var i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] != "number") {
        return "invalid, only numbers are allowed";
      } else {
        res *= arguments[i];
      }
    }
    return res;
  }
};
