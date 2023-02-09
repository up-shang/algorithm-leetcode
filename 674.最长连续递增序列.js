/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  let dp = new Array(nums.length).fill(1)
  for (let i = 0; i < nums.length - 1; i++) {
    // 后一个比前一个大，则+1
    // 否则从当前的1重新计数
    if (nums[i + 1] > nums[i]) {
      dp[i + 1] = dp[i] + 1
    }
  }
  return Math.max(...dp)
};
var findLengthOfLCIS1 = function (nums) {
  let ret = 1
  let count = 1
  let cur = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > cur) {
      count++
      cur = nums[i]
      ret = Math.max(ret, count)
    }
    if (nums[i] < cur) {
      count = 1
      cur = nums[i]
    }
  }
  return ret
};
// @lc code=end

