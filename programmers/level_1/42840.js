// 모의고사

function solution(answers) {
  var answer = [];
  const arr_point = [0, 0, 0];
  const arr_student2 = [ 1, 3, 4, 5];
  const arr_student3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  
  for([index, e] of answers.entries()){
      if(index % 5 + 1 == e)
        arr_point[0]++;

      if((index % 2 == 0 ? 2 : arr_student2[(index - ( index + 1 ) / 2 ) % 4]) == e)
        arr_point[1]++;

      if(arr_student3[index % 10] == e)
        arr_point[2]++;
  }
  
  const max_point = Math.max(...arr_point);
  for([index, e] of arr_point.entries()){
      if(e == max_point)  answer.push(index+1);
  }

  answer.sort((a, b) =>{return a - b})
  
  return answer;
}