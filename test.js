const evenOrOdd = num => {
	if (num % 2 === 0) {
		return '짝수입니당';
	} else if (num % 2 === 1) {
		return '홀수입니당';
	}
};

console.log(evenOrOdd(5));
console.log(evenOrOdd(8));
