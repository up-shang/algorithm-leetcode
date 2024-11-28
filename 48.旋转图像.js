/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length
  // 先构造一个相同结构的辅助n*n数组
  const matrixNew = new Array(n).fill(0).map(() => new Array(n).fill(0))
  // 根据观察，得出规律旋转后第一行元素会到倒数最后一列按照原顺序排布,依次就是n - row - 1
  // 最后就是原[i][j]变成[j][n - i - 1] j的位置是新的旋转后的所在行
  // 所以现在来填数了
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrixNew[j][n - i - 1] = matrix[i][j]
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix[i][j] = matrixNew[i][j]
    }
  }
}
// @lc code=end
