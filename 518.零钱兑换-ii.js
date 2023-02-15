/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  let dp = new Array(amount + 1).fill(0)
  dp[0] = 1 // 起点为amount0,故组合为1
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      // 先固定一个硬币
      // 递推出每个j与amount之间的组合的个数
      // amount时就dp[j - coins[i]]总和 + 当前coins
      dp[j] += dp[j - coins[i]]
    }
  }
  return dp[amount]
};
// @lc code=end

