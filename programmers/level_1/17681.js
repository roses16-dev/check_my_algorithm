// [1차] 비밀지도

function solution(n, arr1, arr2) {
  var answer = [];

  const arr_binary1 = arr1.map(e => decimalToBinaryArray(n, e));
  const arr_binary2 = arr2.map(e => decimalToBinaryArray(n, e));

  answer = arr_binary1.map((e, i) => e.flatMap((e_n, i_n) => (e_n)*1 + (arr_binary2[i][i_n])*1).join('').replace(/[1-2]|0/g, a => +a ? '#' : ' '));
  
  return answer;
}

function decimalToBinaryArray(n, b){
  const arr_temp = b.toString(2).split('');
  const arr_return = new Array(n - arr_temp.length);

  arr_return.fill('0', 0, n - arr_temp.length <= 0 ? 0 : n - arr_temp.length);
  arr_return.push(...arr_temp);

  return arr_return;
}