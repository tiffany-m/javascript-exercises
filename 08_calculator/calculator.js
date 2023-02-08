const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	if(arr.length === 0) {
    return 0;
  } else if (arr.length === 1) {
    return arr[0]
  } else {
    let total = arr.reduce((total, item) => total + item, 0)
    return total;
  }
};

const multiply = function(arr) {
  if(arr.length === 2) {
    return arr[0] * arr[1];
  } else {
    let total = arr.reduce((total, item) => total * item, 1)
    return total;
  }
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
  if(a === 0) {
    return 1;
  } else {
    let total = 1;
    for(let i = 1; i <= a; i++) {
      total = total * i;
    }
    return total;
  }
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
