// [1차] 다트 게임

function solution(dartResult) {
  const arr_point = [];
  const arr_result = dartResult.match(/[0-9]{1,2}[SDT][\*\#]?/g);
  let temp = [];

  for(let i = 0 ; i < arr_result.length ; i++){
      temp = calcPoint(arr_result[i]);

      if(temp[1] === '*'){
          temp[0] *= 2;
          if(i > 0) arr_point[i-1] *= 2
      }
      if (temp[1] === '#') temp[0] = -temp[0];

      arr_point.push(temp[0]);
  }
  
  return arr_point.reduce((a, b) => a + b);
}

// 1회짜리 string을 받아서 점수로 출력
function calcPoint(s){
  const arr_sdt = ['S', 'D', 'T'];
  const exp = /([0-9]{1,2})([SDT])([\*\#]?)/;
  const output = Math.pow(s.match(exp)[1]*1, arr_sdt.indexOf(s.match(exp)[2])+1);

  return new Array(output, s.match(exp)[3]);
}
