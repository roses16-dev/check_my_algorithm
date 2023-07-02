// 문자열 내 p와 y의 개수

function solution(s){
  let count_p = s.match(/[p|P]/g) === null ? 0 : s.match(/[p|P]/g).length;
  let count_y = s.match(/[y|Y]/g) === null ? 0 : s.match(/[y|Y]/g).length;

  if(count_p === count_y) return true;

  return false;
}