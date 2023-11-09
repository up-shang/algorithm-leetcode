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
// 注意题意为有重复数字的nums，所以需要注意去重
var permuteUnique = function(nums) {
  nums.sort((a, b) => a - b)
  const ret = []
  const path = []
  function backtrack(idx, used) {
    if (idx === nums.length) {
      return ret.push([...path])
    }
    for (let i = 0; i < nums.length; i++) {
      // 重点是这里！！！，每个数层如果当前数字与上一个数字相等，且前一个数字已经用过释放了，则直接跳过当前数字
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

