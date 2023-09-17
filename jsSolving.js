// 1번문제

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

// 2번문제

const item = {
	야채곱창: 5,
	바나나우유: 10,
	삼각김밥: 15,
	도시락: 10,
	샌드위치: 10,
};

function checkItem(itemName, itemCount) {
	if (item[itemName] === undefined) {
		console.log(`${itemName} (품목 없음)`);
	} else if (item[itemName] !== itemCount) {
		console.log("전산표와 일치하지 않습니다.");
	} else {
		console.log("전산표와 일치합니다.");
	}
}

checkItem("야채곱창", 5);
checkItem("바나나우유", 8);
checkItem("고추바사삭치킨", 3);

//3번문제

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
const a2 = process(arr, 9);
console.log(a2);

//4번문제

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

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const a1 = solution(arr);
console.log(a1);

//5번문제

function car(거리) {
	if (거리 != 0 && 거리 <= 40) {
		console.log("시동이 걸렸습니다");
		for (let i = 1; i <= 거리; i++) {
			console.log(i + "km");
		}
	} else {
		console.log("안전 위험으로 시동을 종료했습니다");
	}
	return "시동이 꺼졌습니다";
}

console.log(car(39));
