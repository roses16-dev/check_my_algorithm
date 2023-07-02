// JadenCase 문자열 만들기

function solution(s) {
  let exp = /\b[a-z]/g

  return s.toLowerCase().replace(exp, e => e.toUpperCase());
}