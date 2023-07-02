// 핸드폰 번호 가리기

function solution(phone_number){   

  return phone_number.replace(/\d(?!\d{0,3}$)/g, '*');
}