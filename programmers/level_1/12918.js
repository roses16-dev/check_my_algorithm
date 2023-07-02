// 문자열 다루기 기본

function solution(s){
  const exp = /^\d{4}$|^\d{6}$/;

  return exp.test(s);
}