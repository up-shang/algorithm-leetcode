/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const dp = new Array(prices.length).fill([0, 0])// 持有，不持有
  dp[0] = [-prices[0], 0] //当前利润
  for (let i = 1; i < prices.length; i++) {
    // 持有 = 昨天持有，今天不操作  or  昨天没有持有，今天买入（负的）
    // 不持有 = 昨天持有，今天卖出  or  昨天没有持有，今天不操作
    dp[i] = [
      Math.max(dp[i - 1][0], -prices[i]),
      Math.max(dp[i - 1][0] + prices[i], dp[i - 1][1])
    ]
  }
  return dp[prices.length - 1][1]
};
// @lc code=end

