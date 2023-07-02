// 문자열 내 마음대로 정렬하기

function solution(strings, n) {
  let arr_char = [];
  
  for(e of strings.values())
      arr_char.push(e[n])
  
  const set_char = new Set(arr_char);
  arr_char = Array.from(set_char)
  arr_char.sort()

  const arr_temp = [];
  for(e of set_char.values()){
      arr_temp[e] = strings.filter(function(a){
          return a[n] == e
      })
  }
  let temp2 = [];
  for(e of arr_char.values()){
      arr_temp[e].sort()
      temp2 = temp2.concat(arr_temp[e])
  }
  return temp2;
}