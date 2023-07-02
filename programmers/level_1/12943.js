// 콜라츠 추측

function solution(num){
  let answer = 0;
  
  for (let i = 0; i < 500; i++) { // 500번 반복하는 반복문을 설정.
    if (num !== 1) { // 1이 나올 때까지 반복해야 되기 때문에,
    // 결과값이 1이 아닐 때로 설정한 후,
      if (num % 2 === 0) { // 짝수일 때는,
        num = num / 2; // num 나누기 2
      }else{
        num = num * 3 + 1; // 아닐 때(홀수)는 *3+1
      }
    }else{
      return answer = i; // 두 번째 if문을 거쳐서 1이 나왔을 경우,
    } // i가 몇 번째에서 1이 나왔는지를
    // 첫 번째 if문의 else에서 리턴
  } 
  return answer = -1; // 500번을 실행하는 반복문이 끝났는데도 1이 안 나왔을 경우.
}