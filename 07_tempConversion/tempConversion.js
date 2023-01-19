// Write two functions that convert temperatures from Fahrenheit to Celsius, and vice versa:

// convertToCelsius(32) // fahrenheit to celsius, should return 0

// convertToFahrenheit(0) // celsius to fahrenheit, should return 32

// - You can find the relevant formulae on[Wikipedia](https://en.wikipedia.org/wiki/Conversion_of_units_of_temperature).

// - Try to find by yourself on the Internet how to round a number to 1 decimal place in JavaScript.
//   If you struggle, have a look[here](https://stackoverflow.com/q/7342957/5433628).


const convertToCelsius = function(f) {
  let c = (f - 32) * (5 / 9);
  c = Math.round(c * 10) / 10;

  return c;
};

const convertToFahrenheit = function(c) {
  let f = (c * (9 / 5)) + 32;
  f = Math.round(f * 10) / 10;

  return f;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
