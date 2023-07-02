// 약수의 개수와 덧셈

function solution(left, right) {
  var answer = 0;

  for(let i = left ; i <= right ; i++){
      const arr_temp = [];
      const n_half = Math.floor(i/2);
      
      for(let j = 1 ; j <= n_half ; j++)
          if(i % j == 0) arr_temp.push(j)
      
      answer += (arr_temp.length+1) % 2 === 0 ? i : -i;

  }
  return answer;
}