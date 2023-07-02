// 성격 유형 검사하기

function solution(survey, choices) {
  var answer = '';
  const arr_type = ['R','T','C','F','J','M','A','N'];
  const arr_point = new Array(8).fill(0);

  // 혹시 안되면 survey 쪼개서 홀짝비교
  for(let i = 0 ; i < survey.length ; i++){
      if(choices[i] === 4)
        continue;

      if(choices[i] < 4 )
        arr_point[arr_type.indexOf(survey[i].split('')[0])] += 4-choices[i];
      else
        arr_point[arr_type.indexOf(survey[i].split('')[1])] += choices[i]-4;
  }
  
  for(let i = 0 ; i < arr_type.length ; i += 2){
      answer += arr_point[i] >= arr_point[i+1] ? arr_type[i] : arr_type[i+1];
  }

  return answer;
}