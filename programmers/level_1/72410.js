// 신규 아이디 추천

function solution(new_id) {
  let answer = new_id;

  if(!new_id)
    return 'a';

  // 소문자로 만들기
  answer = answer.toLowerCase();
  
  // 정규표현식 replace 제거
  answer = answer.replace(/[^a-z0-9._-]/gm, "");
  answer = answer.replace(/\.{2,}/gm, ".");
  answer = answer.replace(/^\.|\.${3, 15}/, "");

  if(answer.length >= 16)
    answer = answer.slice(0, 15);

  answer = answer.replace(/\.$/, "");

  if(!answer)
    answer = 'a';

  if(answer.length <= 2)
    answer += answer[answer.length-1].repeat(3-answer.length);
  
  return answer;
}