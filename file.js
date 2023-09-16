// function solution(n, k) {

//   let juice = 2000 * k;
//   let sheep = 12000 * n;
//   var answer = juice+sheep;
//   return answer;
// }
// console.log(solution(10, 3));

// 카페
// 음료와 디저트를 같이 주문하면 디저트 20%할인
// 계산된 가격의 5%포인트를 적립
// 주문하는 메뉴와 돈을 입력받는다
// 계산해서 주문한 메뉴와 거스름돈, 적립포인트를 출력

let coffee = {
  아메리카노: 1000,
  라떼: 1500,
  모카라떼: 2000,
};
let dessert = {
  케이크: 2500,
  마카롱: 2000,
  쿠키: 1500,
};

function order(menu, price) {
  let coffeePrice = coffee[menu[0]];
  let dessertPrice = dessert[menu[1]];
  let discountRate = dessertPrice * 0.2;
  let discount = dessertPrice - discountRate;
  let point = (coffeePrice + discount) * 0.05;
  let change = price - (coffeePrice + discount);

  if (
    coffeePrice + discount > price ||
    coffeePrice > price ||
    dessert[menu] > price
  ) {
    return console.log("금액이 부족합니다");
  }

  if (coffeePrice + discount <= price) {
    console.log(
      `주문하신 메뉴 : ${menu} 
거스름돈 : ${change}원
${point}포인트 적립되었습니다`
    );
  }

  if (coffee[menu] && !dessert[menu]) {
    console.log(`주문하신 메뉴 : ${menu} 
거스름돈 : ${price - coffeePrice}원
${coffeePrice * 0.05}포인트 적립되었습니다`);
  }

  if (dessert[menu] && !coffee[menu]) {
    console.log(`주문하신 메뉴 : ${menu} 
거스름돈 : ${price - dessert[menu]}원
${dessert[menu] * 0.05}포인트 적립되었습니다`);
  }
}

order(["쿠키"], 1000);
