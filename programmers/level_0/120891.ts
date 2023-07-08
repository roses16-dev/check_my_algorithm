// 2023.07.08
// 369게임

function solution(order: number): number {
  return order.toString().split('').map(Number).filter(n => n % 3 === 0 && n != 0).length;
}
