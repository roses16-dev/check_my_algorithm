// 폰켓몬

function solution(nums) {
  const n_type = new Set(nums)['size'];
  const n_Ihave = nums.length / 2;

  return n_type < n_Ihave ? n_type : n_Ihave;
}