function maxValue(arr) {
	const len = arr.length;
	for (let i = 0; i < len - 1; i++) {
		let maxIndex = i;

		for (let j = i + 1; j < len; j++) {
			if (arr[j] > arr[maxIndex]) {
				maxIndex = j;
			}
		}

		const temp = arr[i];
		arr[i] = arr[maxIndex];
		arr[maxIndex] = temp;
	}

	return {
		maxValue: arr[0],
		sortArr: arr,
	};
}

const a = maxValue([1, 2, 3, 4, 5]);
console.log(a);
