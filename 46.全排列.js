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
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let list = []
  let path = []
  backtrack(0)
  function backtrack(idx) {
    if (idx === nums.length) {
      return list.push([...path])
    }
    for (let i = 0; i < nums.length; i++) {
      // 跳过树枝上与树层数字重复的情况
      if (path.includes(nums[i])) {
        continue
      }
      path.push(nums[i])
      backtrack(idx + 1)
      path.pop()
    }
  }
  return list
};
// @lc code=end

