/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (!amount) {
    return 0
  }
  let dp = Array(amount + 1).fill(Infinity)
  dp[0] = 0
  // 枚举所有硬币数组，min函数内对比上次枚举内的dp的值"，取最小值+1（当前枚举的一枚硬币）
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] = Math.min(dp[j - coins[i]] + 1, dp[j])
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
};
// @lc code=end

