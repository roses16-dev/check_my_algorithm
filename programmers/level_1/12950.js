// 행렬의 덧셈
function solution(arr1, arr2){

  return arr1.map((row_e, row_i) => row_e.map((e, i) => e + arr2[row_i][i]));
}