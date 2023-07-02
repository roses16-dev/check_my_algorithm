// 올바른 괄호

function solution(s){
  let stack = []

  for(e of s.split('')){
      if(e === ')'){
          if(stack.length === 0)  return false;
          stack.pop()
      }else{
          stack.push('(')
      }
  }

  if(stack.length !== 0)  return false;

  return true
}