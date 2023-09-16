function solution(arr) {
	let evenCount = 0;
	let oddCount = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			evenCount++;
		} else {
			oddCount++;
		}
	}

	return [evenCount, oddCount];
}

const arr = [1, 2, 3, 4, 5];
const a = solution(arr);
console.log(a);
