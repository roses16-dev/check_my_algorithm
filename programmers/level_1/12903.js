// 가운데 글자 가져오기

function solution(s){
  const arr_s = s.split('');

  if( arr_s.length % 2 === 0 )
      return arr_s.filter((_, i) => (i === arr_s.length / 2) || (i === arr_s.length / 2 - 1)).join('');
  else
      return arr_s.filter((_, i) => (i === Math.floor(arr_s.length / 2))).join('');
}