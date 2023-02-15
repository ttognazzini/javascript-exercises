const convertToCelsius = function(f) {
  return round((f -32 ) * (5/9),1)
};

const convertToFahrenheit = function(c) {
  return round((c * (9/5) + 32),1)
};

const round = function(number, percision = 0) {
  return Math.round((number + Number.EPSILON) * 10**percision) / 10**percision
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
