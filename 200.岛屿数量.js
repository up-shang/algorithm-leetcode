/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let landCount = 0
  let m = grid.length, n = grid[0].length
  // 两层for循环遍历每个网格节点
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 有多少个1则有多少个岛屿
      // dfs会把周围的1改为0，所以计算剩余1的数量则为岛屿数量
      if (grid[i][j] === '1') {
        landCount++
        dfs(grid, i, j)
      }
    }
  }
  return landCount
  function dfs(grid, r, c) {
    if (!inArea(grid, r, c)) {
      return
    }
    // 如果是海洋则直接跳出不再遍历
    if (grid[r][c] !== '1') {
      return
    }
    // 遍历过的改为海洋,剩余的陆地则周围都是海水就是岛屿了
    grid[r][c] = '0'
    // 上下左右分别查找
    dfs(grid, r - 1, c)
    dfs(grid, r + 1, c)
    dfs(grid, r, c - 1)
    dfs(grid, r, c + 1)
  }
  // 判断边界，跳出条件
  function inArea(grid, r, c) {
    return 0 <= r && r < grid.length && 0 <= c && c < grid[0].length
  }
};
// @lc code=end

