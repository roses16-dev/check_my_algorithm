// 부족한 금액 계산하기

function solution(price, money, count){
  const cost = (price + price * count) * (count / 2);

  return money - cost > 0 ? 0 : Math.abs(money-cost);
}