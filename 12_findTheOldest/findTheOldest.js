const findTheOldest = function(array) {
	return array.reduce((max, value) => 
		(!max) ? value : 
		(!max.yearOfDeath) ? (new Date().getFullYear() - max.yearOfBirth > value.yearOfDeath - value.yearOfBirth) ? max : value :
		(max.yearOfDeath - max.yearOfBirth > value.yearOfDeath - value.yearOfBirth) ? max : value
	);
};

// Do not edit below this line
module.exports = findTheOldest;
