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
var permuteUnique = function(nums) {
  nums.sort((a, b) => a - b)
  let ret = []
  let path = []
  let idx = 0
  function backtrack(idx, used) {
    if (idx === nums.length) {
      return ret.push([...path])
    }
    for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i - 1] === nums[i] && !used[i - 1]) {
        continue
      }
      if (!used[i]) {
        used[i] = true
        path.push(nums[i])
        backtrack(idx + 1, used)
        path.pop()
        used[i] = false
      }
    }
  }
  backtrack(0, [])
  return ret
};
// @lc code=end

