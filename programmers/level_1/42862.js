// 체육복

function solution(n, lost, reserve) {
  var answer      = n - lost.length;
  const arr_reserve = reserve.sort((a, b)=> a-b);
  const arr_lost    = lost.sort((a, b)=> a-b);

  // 내 여벌 쓰는 친구들
  const arr_alreadyhave = arr_lost.filter((e) => arr_reserve.indexOf(e) !== -1);

  for( e of arr_alreadyhave ){
      arr_reserve.splice(arr_reserve.indexOf(e), 1);
      arr_lost.splice(arr_lost.indexOf(e), 1);
      answer ++;
  }

  // 진짜 빌려야 하는 친구들
  let n_temp = 0;      // 빌려줄 친구 번호를 저장할 변수
  
  for(e of arr_lost){
      if(arr_reserve.length === 0)
        break;

      if(arr_reserve.indexOf(e-1) !== -1)
        n_temp = e-1;
      else if(arr_reserve.indexOf(e+1) !== -1)
        n_temp = e+1;
      
      if(n_temp !== 0){
          arr_reserve.splice(arr_reserve.indexOf(n_temp), 1);
          answer ++;
          n_temp = 0;
      }
  }
  return answer;
}
