/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let dp = [cost[0], cost[1]]
  // 爬楼梯有两种方案（dp[n] = dp[n-1]+dp[n-2]）
  // n-1 + 1步；n-2 + 2步
  // 记住 + 当前索引的cost[i]费用
  for (let i = 2; i < cost.length; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i]
  }
  return Math.min(dp[cost.length - 1], dp[cost.length - 2])
};
// @lc code=end

