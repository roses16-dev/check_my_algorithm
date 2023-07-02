// 같은 숫자는 싫어

function solution(arr){
  var answer = [];

  for (let e of arr.entries()) 
    if(e[1] !=  answer[answer.length -1]) 
      answer.push(e[1]);
  
  return answer;
}