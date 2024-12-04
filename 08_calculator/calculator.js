const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr = []) {
  return arr.reduce((total, item) => total + item, 0);
};

const multiply = function (arr = []) {
  return arr.reduce((product, item) => product * item, 1);
};

const power = function (a, b) {
  let product = 1;
  for (let i = 0; i < b; i++) {
    product *= a;
  }
  return product;
};

const factorial = function (number) {
  let factorial = 1;
  for (let i = number; i > 1; i--) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
