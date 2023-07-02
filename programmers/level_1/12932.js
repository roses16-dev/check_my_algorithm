// 자연수 뒤집어 배열로 만들기

function solution(n){
  var answer = [];
  let s_number = n.toString();

  for(let i = s_number.length-1 ; i >= 0 ; i --){
      answer.push(Number(s_number[i]));
  }  

  return answer;
}