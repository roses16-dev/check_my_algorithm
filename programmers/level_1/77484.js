// 로또의 최고 순위와 최저 순위

function solution(lottos, win_nums){
  var answer = [];
  let temp_unknwon = 0;
  let temp_diff = 0;

  for ( [index, e] of lottos.entries()){
      if( e == 0 ) {
          temp_unknwon++;
          continue;
      }
      if(win_nums.indexOf(e) == -1 ) {
          temp_diff++;
      }
  }

  answer.push( temp_diff >= 5 ? 6 : 7-(6-temp_diff));
  answer.push( (temp_diff+temp_unknwon) >= 5 ? 6 : 7-(6-(temp_diff+temp_unknwon)));
  
  return answer;
}