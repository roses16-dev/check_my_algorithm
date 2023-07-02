// 제일 작은 수 제거하기

function solution(arr) {
  var answer = [];

  if(arr.length <= 1){
      answer.push(-1);
      return answer;
  }

  let temp = arr[0];
  for(let i = 0 ; i < arr.length; i++){
      if(temp > arr[i]) temp = arr[i];
  }

  arr.splice(arr.indexOf(temp), 1)
  answer = arr;
  return answer;
}