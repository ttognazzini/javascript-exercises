const add = function(a,b) {
	return a + b
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(a) {
	return (a === undefined || a.length ==0) ? 0 : a.reduce( f = (total,value, index, array) => total + value);
};

const multiply = function(a) {
	return (a === undefined || a.length ==0) ? 0 : a.reduce( f = (total,value, index, array) => total * value);
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(a) {
	if (a === 0 || a === 1) {return 1}  
	else {
	  	for (let i = a-1; i >= 1; i--) {a *= i};
	    return a;
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
