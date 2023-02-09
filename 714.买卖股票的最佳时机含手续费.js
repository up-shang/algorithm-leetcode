/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  // dp
  let len = prices.length
  let has = -prices[0] - fee
  let notHas = 0
  for (let i = 1; i < len; i++) {
    has = Math.max(has, notHas - prices[i] - fee)
    notHas = Math.max(notHas, has + prices[i])
  }
  return notHas
};
var maxProfit1 = function (prices, fee) {
  // 贪心
  let ret = 0
  let minPrice = prices[0]
  for (let i = 0; i < prices.length; i++) {
    // 更新下买入值
    if (prices[i] < minPrice) {
      minPrice = prices[i]
    }
    // 卖出亏损情况考虑
    if (prices[i] > minPrice && prices[i] < minPrice + fee) {
      continue
    }
    // 可卖出情况
    if (prices[i] > minPrice + fee) {
      ret += prices[i] - minPrice - fee
      // 已卖出，故更新下minPrice
      minPrice = prices[i] - fee
    }
  }
  return ret
};
// @lc code=end

