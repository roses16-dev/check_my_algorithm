// K번째수

function solution(array, commands) {
  var answer = [];

  commands.forEach((e, i) => {
      answer[i] = array.slice(e[0]-1, e[1]).sort((a, b) => a - b)[e[2]-1];
  })
  
  return answer;
}