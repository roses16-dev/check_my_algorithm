// 이상한 문자 만들기

function solution(s){
  let temp = '';
  let char_count = 0;

  for(let i = 0 ; i < s.length ; i++){
      if(char_count % 2 == 0)
        temp += s[i].toUpperCase();
      else
        temp += s[i].toLowerCase();

      char_count++;
      if(s[i] == " ")
          char_count = 0;    
  }
  return temp;
}