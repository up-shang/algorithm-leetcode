/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 不操作
  // 买入1
  // 卖出1
  // 买入2
  // 卖出2
  const dp = new Array(prices.length).fill(0).map(i => new Array(5).fill(0))
  dp[0][1] = -prices[0]
  dp[0][3] = -prices[0]
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = dp[i - 1][0]
    dp[i][1] = Math.max(dp[i - 1][0] - prices[i], dp[i - 1][1])
    dp[i][2] = Math.max(dp[i - 1][1] + prices[i], dp[i - 1][2])
    dp[i][3] = Math.max(dp[i - 1][2] - prices[i], dp[i - 1][3])
    dp[i][4] = Math.max(dp[i - 1][3] + prices[i], dp[i - 1][4])
  }
  return dp[prices.length - 1][4]
};
// @lc code=end

