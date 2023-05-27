const convertToCelsius = function(fahernheit) {
  let celsius;
  celsius = (fahernheit - 32) * (5/9);
  celsius = Math.round(celsius * 10) / 10;
  return celsius;
};

const convertToFahrenheit = function(celsius) {
  let fahernheit;
  fahernheit = (celsius * (9/5)) + 32;
  fahernheit = Math.round(fahernheit * 10) /10;
  return fahernheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
