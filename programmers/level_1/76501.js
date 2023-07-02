// 음양 더하기


function solution(absolutes, signs){
  return absolutes.reduce((p, c, i) => p + ( signs[i] ? c : -c), 0);
}