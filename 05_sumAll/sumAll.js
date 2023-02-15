const sumAll = function(startNumber, endNumber) {

	// validate incoming parameters
	if (typeof startNumber != "number" ) {return "ERROR"}
	if (typeof endNumber != "number" ) {return "ERROR"}
	if (startNumber < 0 ) {return "ERROR"}
	if (endNumber < 0 ) {return "ERROR"}

	// if the start number is larger, switch them
	if (startNumber > endNumber) {let save = startNumber;startNumber=endNumber;endNumber=save}

	let sum = 0;
	for (let i = startNumber; i <= endNumber; i++) {
		sum += i;
	}
	return sum;
};

// Do not edit below this line
module.exports = sumAll;
