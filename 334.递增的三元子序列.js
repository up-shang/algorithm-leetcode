/*
 * @lc app=leetcode.cn id=334 lang=javascript
 *
 * [334] 递增的三元子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  // 贪心
  const len = nums.length
  if (len < 3) return false
  let first = nums[0], second = Number.MAX_VALUE
  for (let i = 1; i < len; i++) {
    const num = nums[i]
    // 下次迭代，判断大于第二个数则直接true
    if (num > second) {
      return true
    }
    // 比f大，则记录为第二个数
    else if (num > first) {
      second = num
    } else {
      // 前面的更小，则直接更新first
      first = num
    }
  }
  return false
};
// @lc code=end

