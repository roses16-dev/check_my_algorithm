// 2023.07.07
// 배열 만들기 3

function solution(arr: number[], intervals: number[][]): number[] {

  return [...arr.slice(intervals[0][0], intervals[0][1] + 1), ...arr.slice(intervals[1][0], intervals[1][1]+1)]
}