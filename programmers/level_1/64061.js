// 크레인 인형뽑기 게임

function solution(board, moves){
  var answer = 0;
  let arr_pick = [];

  for(e of moves){
      for(let i = 0 ; i < board.length; i++){
          if(board[i].every(e => e === 0))
            continue;

          if(board[i][e-1] !== 0){
              if(board[i][e-1] === arr_pick[arr_pick.length-1]) {
                  arr_pick.pop();
                  answer += 2;
              } else {
                  arr_pick.push(board[i][e-1]);
              }
              board[i][e-1] = 0;
              break;
          }
      }
  }

  return answer;
}