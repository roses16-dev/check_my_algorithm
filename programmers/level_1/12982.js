// 예산

function solution(d, budget) {
  var answer = 0;

  d.sort((a, b) => a-b);
  for(e of d){
      if(e <= budget){
          answer++;
          budget-=e;
      }else{
          break;
      }
  }

  return answer;
}