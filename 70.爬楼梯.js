/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let dp = [1, 2]
  // n的方法之和 = dp[n-1] + dp[n-2]
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  // n-1代表索引，n阶时需要的方法数
  return dp[n - 1]
};
// @lc code=end

