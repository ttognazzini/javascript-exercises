const removeFromArray = function(inputArray,...elementsToRemove) {

	elementsToRemove.forEach(function (elementToRemove) {
		for (let i = 0; i < inputArray.length;i++) {
			if (inputArray[i] === elementToRemove) {inputArray.splice(i,1)}
		}
	});

	return inputArray;

};

// Do not edit below this line
module.exports = removeFromArray;
