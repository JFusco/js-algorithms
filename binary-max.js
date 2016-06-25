'use strict';

export const binaryMax = n => {
	let max = 0, num = n;

	while(num > 0) {
		num = Math.round(num / 2);

		max++;

		if(num === 1) return max;
	}
};