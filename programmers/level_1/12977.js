// 소수 만들기

function solution(nums){
  let arr = [];
  for(let i = 0 ; i < nums.length -2 ; i++){
      for(let j = i+1 ; j < nums.length -1; j++){
          for (let k = j+1 ; k < nums.length;k++){
              arr.push(nums[i]+nums[j]+nums[k]);
          }
      }
  }

  let is_prime;
  let n_count = 0;

  for(e of arr.values()){
      is_prime = true;

      for(let i = 2;i <= Math.floor(Math.sqrt(e)); i++)
          if(e % i == 0){
              is_prime = false;
              break;
          }
      if(is_prime)
        n_count++;
  }
  
  return n_count;
}