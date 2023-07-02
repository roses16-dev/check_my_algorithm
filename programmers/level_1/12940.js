// 최대공약수와 최소공배수

function solution(n, m){
  var answer = [];
  
  // 정렬하기 n : 큰 수 m : 보다 작은 수
  if( n < m ){
      let temp = m;
      m = n;
      n = temp;
  }
  
  // 최소공배수 찾기
  for(let i = 1 ; i <= m ; i++){
      if((i * n) % m === 0){
          // 최소공배수를 찾았다.
          answer[1] = i*n;
          break;
      }
  }

  // 최대공약수 찾기
  n_half = Math.floor(n / 2)
  for(let i = m <= n_half ? m : n_half ; i >= 1 ; i--){
      if(n % i === 0 && m % i ===0){
          // 최대공약수를 찾았다.
          answer[0] = i;
          break;
      }
  }

  return answer;
}