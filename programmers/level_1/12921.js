// 소수 찾기

function solution(n){
  var answer = 0;
  
  for (let i = 2 ; i <= n ; i ++)
      if(isPrime(i)) {
          answer++
      }

  return answer;
}

function isPrime(n){
  if(n === 2 || n === 3)
    return true;
  if(n % 2 === 0)
    return false;

  for(let i = 3 ; i <= Math.sqrt(n); i++)
      if(n % i === 0)
        return false;

  return true;
}