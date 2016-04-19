'use strict';

export const binarySearch = (array, targetValue) => {
	let min = 0,
		max = array.length - 1,
		guess,
		guesses = 0;

	while(max >= min){
		guess = Math.floor((max + min) / 2);
		guesses++;

		if(array[guess] === targetValue){
			return {guess, guesses};
		}else if(array[guess] < targetValue){
			min = guess + 1;
		}else{
			max = guess - 1;
		}
	}

	return -1;
};