// 하샤드 수

function solution(x){
  var answer = false;
  const s_x = x.toString();
  let n_division = 0;

  for(let i = 0 ; i < s_x.length ; i++) n_division += Number(s_x[i]);
  if(x % n_division == 0) answer = true;

  return answer;
}