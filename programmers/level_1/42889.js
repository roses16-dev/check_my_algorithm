// 실패율

function solution(N, stages) {
  var answer = [];

  let arr_failRate = [N];

  // 각 스테이지 별 실패율 계산하기
  for(let i = 0 ; i < N; i++){
      const n_stage = stages.filter(e => e-1 >= i ).length;
      const n_fail = stages.filter(e => e-1 === i ).length;

      if(n_fail === 0)
        arr_failRate[i] = [i+1, 0];
      else
        arr_failRate[i] = [i+1, n_fail / n_stage];
  }

  arr_failRate.sort((a, b) => {
      if(a[1] === b[1]) return 0;
      if(a[1] > b[1])   return -1;
      if(a[1] < b[1])   return 1;
  })

  answer = arr_failRate.map(e => e[0]);
  
  return answer;
}