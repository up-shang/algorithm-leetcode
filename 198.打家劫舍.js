/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  // 定义dp
  // 1个时为nums[0],两个时取max
  const dp = [nums[0], Math.max(nums[0], nums[1])]
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]) // 偷上一次的or偷上上次+当前这次的
  }
  return dp[nums.length - 1]
};
// @lc code=end

