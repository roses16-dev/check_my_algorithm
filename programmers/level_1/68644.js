// 두 개 뽑아서 더하기

function solution(numbers){
  var answer = [];
  
      for(let i = 0 ; i < numbers.length;i++){
      for(let j = i+1 ; j < numbers.length ; j++){
          if(answer.indexOf(numbers[i] + numbers[j]) == -1){
              answer.push(numbers[i] + numbers[j]);
          }
      }
  }
  
  // 중복을 제거한다.
  answer.sort(function(a, b){
      return a-b;
  })
  return answer.filter((val,index) => val != answer[index+1]);
  
}