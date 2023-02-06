/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length
  const n = obstacleGrid[0].length
  // 用于统计路径的dp数组
  const dp = new Array(m).fill(0).map(i => new Array(n).fill(0))
  // 给第一列赋值，除去障碍物
  for (let i = 0; i < m && obstacleGrid[i][0] === 0; i++) {
    dp[i][0] = 1
  }
  // 给第一行赋值，除去障碍物
  for (let i = 0; i < n && obstacleGrid[0][i] === 0; i++) {
    dp[0][i] = 1
  }
  // 递推计算每个格子
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // 判断原网格内此格子是否有障碍物
      dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i - 1][j] + dp[i][j - 1]
    }
  }
  return dp[m - 1][n - 1]
};
// @lc code=end

