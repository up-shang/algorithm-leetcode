/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const m = grid.length,
    n = grid[0].length
  // 状态定义
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0)) // 定义dp为m*n的二维数组
  dp[0][0] = grid[0][0] // 状态初始化
  // 状态转移
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      //判断边界
      if (i !== 0 && j === 0) {
        dp[i][j] = dp[i - 1][j] + grid[i][j] //只能往下
      } else if (i === 0 && j !== 0) {
        dp[i][j] = dp[i][j - 1] + grid[i][j] // 只能往右
      } else if (i !== 0 && j !== 0) {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j] // 都可以时，取小的
      }
    }
  }
  return dp[m - 1][n - 1]
}
// @lc code=end
