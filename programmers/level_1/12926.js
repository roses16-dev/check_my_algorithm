// 시저 암호

function solution(s, n){
  var answer = '';

  let arr_case = [];
  arr_case[0] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  arr_case[1] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  for ( [index, e] of Array.from(s).entries() ){
      if(e === " ") {
          answer += " ";
          continue;
      }
      const isUpper = ( e === e.toUpperCase() ? 1 : 0 );  // true 1, false 0
      const n_nextIndex = arr_case[isUpper].indexOf(e) + n;
      answer += n_nextIndex >= arr_case[isUpper].length ? arr_case[isUpper][n_nextIndex - arr_case[isUpper].length] : arr_case[isUpper][n_nextIndex];
          
  }
  return answer;
}