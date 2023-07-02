// 정수 내림차순으로 배치하기

function solution(n) {
  var answer = 0;
  
  const s_number = n.toString();
  const temp = [];

  for(let i = 0 ;  i < s_number.length ;  i++){
      temp.push(s_number[i]);
  }
  temp.sort(function(a, b){return a - b});

  for(let i = 0 ;  i < temp.length ;  i++){
      answer += temp[i]* Math.pow(10, i);
  }
  
  return answer;
}