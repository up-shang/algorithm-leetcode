/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 * 递归加回溯
 * 回溯配合剪枝（结果值，临时区，输入值）
 * 最外层一层循环
 * 内部length<输入值length时，会有多层循环输出全排列情况，每层弹窗后继续i+1输出本级全排列
 * 最终pop到最外层循环的每一个i上，然后i+1继续输出计算后的全排列
 */

// @lc code=start
function backtrack(list, temp, nums) {
  // 全排列，故终止条件为length相同
  if(temp.length === nums.length) {
    return list.push([...temp])
  }
  for(let i=0; i<nums.length; i++) {
    // 全排列的所有数组内数字也不会重复
    if(temp.includes(nums[i])){
      continue
    }
    temp.push(nums[i])
    backtrack(list, temp, nums)
    temp.pop()
  }
}
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let list = []
  backtrack(list, [], nums)
  return list
};
// @lc code=end

