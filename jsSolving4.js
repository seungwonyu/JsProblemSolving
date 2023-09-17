function solution(arr) {
	let even = 0;
	let odd = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			even++;
		} else {
			odd++;
		}
	}

	return [even, odd];
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const a = solution(arr);
console.log(a);
