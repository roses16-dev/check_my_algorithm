// 이진 변환 반복하기

function solution(s) {
  var answer = [0, 0];     
  
  let temp = s;
  while(true){
      if(temp.length === 1) break
      answer[1] += temp.match(/0/g) !== null ? temp.match(/0/g).length : 0
      answer[0] ++
      temp = temp.match(/1/g).length.toString(2)        
  }

  return answer;
}