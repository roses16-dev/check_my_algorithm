// 숫자 문자열과 영단어

function solution(s) {
  var answer = [];

  const arr_slice = [-1, -1];
  const arr_s = [];

  Object.assign(arr_s, s);

  let arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']

  for( [index, e] of arr_s.entries()){

      if(!isNaN(Number(e)))
        answer.push(e);

      if(arr_slice[0] === -1 && isNaN(Number(e)))
        arr_slice[0] = index;

      if(arr_slice[0] !== -1){
          const s_temp = arr_s.slice(arr_slice[0], index+1).join("");
          if(arr.indexOf(s_temp) !== -1){
              // 숫자를 찾아냈을 때
              answer.push(arr.indexOf(s_temp));
              arr_slice.fill(-1);
          }
      }
  }

  return Number(answer.join(""));
}
