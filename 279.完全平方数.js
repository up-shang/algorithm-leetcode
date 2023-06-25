/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  // 注意边界，0时无法匹配返回0
  if (n <= 0) return 0
  // 定义dp，dp代码当前数所需的最小完全平方数的数量，初始化填充上最大数来进行后续比较
  let dp = new Array(n + 1).fill(Number.MAX_VALUE)
  // 初始化dp[0]为0
  dp[0] = 0
  for (let i = 1; i <= n; i++) {
    // 内层循环的下一次永远是当前j的乘积等于当前i
    for (let j = 1; j * j <= i; j++) {
      // 当前i的最小完全平方数，等于j*j <=i的情况下+j*j的乘积，也就是加1
      // 每次通过j*j <=i条件迭代更新取min最小值
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1)
    }
  }
  return dp[n]
};
// @lc code=end

