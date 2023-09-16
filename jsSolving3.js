function processArray(arr, numToCheck) {
	const modifiedArray = arr.map((item) => item + 10);

	if (modifiedArray.includes(numToCheck)) {
		const filteredArray = modifiedArray.filter(
			(item) => item !== numToCheck
		);
		return filteredArray;
	} else {
		console.log("결과값이 없습니다.");
		return undefined;
	}
}

const arr = [1, 2, 3, 4, 5];
const a = processArray(arr, 11);
console.log(a);
