// 정수 제곱근 판별

function solution(n){
  var answer = 0;
  const n_sqrt = Math.sqrt(n);
  
  if(n_sqrt - Math.round(n_sqrt) != 0){
      // 제곱근 정수 아님
      answer = -1;
  }else{
      // 제곱근 정수
      answer = Math.pow(n_sqrt+1, 2);
  }

  return answer;
}