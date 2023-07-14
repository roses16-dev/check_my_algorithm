// 2023.07.14
// 문자열 잘라서 정렬하기

function solution(myString: string): string[] {
  return myString
  .split('x')
  .filter(e => e)
  .sort();
}