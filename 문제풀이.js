//1번 문제

function maxValue(arr) {
    let maxvalue = Math.max(...arr);
    let sortArr = arr.sort((a, b) => {
        if (a < b) return 1;
        if (a === b) return 0;
        if (a > b) return -1;
    });
    return {
        maxvalue,
        sortArr,
    };
}

const a = maxValue([17, 12, 3, 4, 65]);
console.log(a);

//2번 문제

const list = {
    야채곱창: 5,
    바나나우유: 10,
    삼각김밥: 15,
    도시락: 10,
    샌드위치: 10,
};

function check(name, count) {
    if (!Object.keys(list).includes(name)) {
        return console.log(name, "(품목 없음)");
    }
    if (list[name] === count) {
        return console.log("전산표와 일치합니다");
    }
    return console.log("전산표와 일치하지 않습니다");
}

check("사과우유", 10);
check("야채곱창", 10);
check("도시락", 10);

//3번 문제

const arr = [3, 4, 5, 8, 10];
function find(arr, num) {
    let newArr = arr.map(function (el) {
        return el + 10;
    });

    let filteredArr = newArr.filter((el) => el !== num);

    if (newArr.includes(num)) {
        return filteredArr;
    }
    return "결과값이 없습니다";
}

const b = find(arr, 18);
console.log(b);

//4번 문제

function solution(oddEven) {
    let even = 0;
    let odd = 0;

    for (let i = 0; i < oddEven.length; i++) {
        if (oddEven[i] % 2 === 0) {
            even++;
        } else odd++;
    }

    return [even, odd];
}

const oddEven = [1, 2, 3, 4, 5];
const c = solution(oddEven);
console.log(c);
