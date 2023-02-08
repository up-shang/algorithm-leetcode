/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let has = -prices[0]//持有
  let notHas = 0 // 不持有
  for (let i = 1; i < prices.length; i++) {
    has = Math.max(has, notHas - prices[i])
    notHas = Math.max(notHas, has + prices[i])
  }
  return notHas
};
// @lc code=end

