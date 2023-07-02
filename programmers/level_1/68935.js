// 3진법 뒤집기

function solution(n){
  const step1 = n.toString(3);
  const step2 = step1.split("");
  const step3 = step2.reverse();
  const step4 = step3.join('');
  const step5 = parseInt(step4, 3);
  
  return step5;
}