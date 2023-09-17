function process(arr, Check) {
	const modifiedArray = arr.map((item) => item + 10);

	if (modifiedArray.includes(Check)) {
		const filteredArr = modifiedArray.filter((item) => item !== Check);
		return filteredArr;
	} else {
		return "결과값이 없습니다";
	}
}

const arr = [1, 2, 3, 4, 5];
const a = process(arr, 9);
console.log(a);
