// 2023.07.08
// x 사이의 개수

function solution(myString: string): number[]{
  return myString.split('x').map(str => str.length);
}
