// 약수의 합

function solution(n){
    var answer = 0;

    for(let i = 1 ; i <= Math.floor(n / 2) ; i++ ) answer += n % i === 0 ? i : 0 ;

    return answer + n;
}
