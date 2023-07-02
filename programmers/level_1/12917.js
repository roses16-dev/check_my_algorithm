// 문자열 내림차순으로 배치하기

function solution(s) {
  var answer = '';

  console.log(s.toUpperCase() == s)
  answer = Array.from(s).sort((a, b) => {
      if(a == a.toUpperCase() && b == b.toLowerCase()){
          return 1;
      } else if ( b == b.toUpperCase() && a == a.toLowerCase()) {
          return -1;
      } else if ( a > b ){
          return -1;
      } else {
          return 1;
      }
  }).join("");
  
  return answer;
}