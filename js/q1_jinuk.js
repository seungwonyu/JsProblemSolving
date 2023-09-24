/*
변수 위치 찾기

해당 문제는 해석하기에 따라 답변이 다를 수 있습니다.
본인이 이해한 방향으로 문제를 풀이하셔도 괜찮습니다

변수 a는 main 함수 안에서만 사용된다
변수 b는 해당 js 어디에서든 사용된다
변수 c는 메인 함수 안에서 실행되는 콜백함수 solution의 인자이다

변수 d는 solution에서 전달받은 c를 다른 형태로 바꿔주는 임의의 함수이며 solution 함수의 반환 값이다.
변수 e는 main함수의 최종 반환 값으로 향후 다른 함수에서 재사용된다.
*/
let b;
function solution() {
  return function d() {};
}
function parse() {}

function main() {
  let a;
  solution(c);
  return e;
}
