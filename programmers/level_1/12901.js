// 2016년

function solution(a, b){
  const weeks = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const date = new Date(`2016-${a}-${b}`);
      
  return weeks[date.getDay()];
}