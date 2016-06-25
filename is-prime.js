'use strict';

export const isPrime = value => {
	if(typeof value !== 'number') return false;
	if(value !== Math.round(value)) return false;
	if(value < 2) return false;

	for(var i = 2; i < value; i++){
		if(value % i == 0) return false;
	}

	return true;
};
