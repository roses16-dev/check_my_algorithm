// 숫자의 표현

function solution(n) {
  var answer = 0;

  if(n === 1) return 1

  let breakCount = 0;
  for(let i = 1 ; i < n; i++){
      breakCount += i;
      if( breakCount > n) break;

      if( i % 2 === 0){
          if( n % i === i/2) answer++;
      } else {
          if( n % i === 0) answer++;
      }
  }
  return answer;
}