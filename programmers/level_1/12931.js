// 자릿수 더하기

function solution(n){
    var answer = 0;
    let s_number = n.toString();

    for(let i = 0 ; i < s_number.length ; i ++){
        answer += Number(s_number[i]);
    }
          
    return answer;
}