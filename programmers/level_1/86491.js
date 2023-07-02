// 최소직사각형

function solution(sizes){
  var answer = 0;

  const arr_min = [];
  const arr_max = [];

  for(let i = 0 ; i < sizes.length;i++){
      arr_min.push(Math.min(...sizes[i]));
      arr_max.push(Math.max(...sizes[i]));
  }

  answer = Math.max(...arr_min) * Math.max(...arr_max);

  return answer;
}