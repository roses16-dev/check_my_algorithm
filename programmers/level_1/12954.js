// x만큼 간격이 있는 n개의 숫자

function solution(x, n){
  var answer = new Array(n);

  answer = answer.fill(x).map((e, i) => e + (e * i));

  return answer;
}