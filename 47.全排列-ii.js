/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  nums.sort((a, b) => b - a)
  let ret = []
  let path = []
  backtrack([])
  return ret
  function backtrack(used) {
    if (path.length === nums.length) {
      ret.push([...path])
    }
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i]
      if (nums[i] === nums[i - 1] && !used[i - 1]) {
        continue
      }
      if (!used[i]) {
        used[i] = true
        path.push(num)
        backtrack(used)
        path.pop()
        used[i] = false
      }
    }
  }
};
// @lc code=end

