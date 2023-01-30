/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      // 说明此处已预先设置值，直接跳过
      if (board[i][j] !== '.') {
        continue
      }
      // 开始放数字k
      // k从1到9可选择
      for (let k = 1; k <= 9; k++) {
        k = k.toString()
        if (isValid(board, i, j, k)) {
          // 如果通过则将此处放置k
          board[i][j] = k
          // 递归继续判断放置下一个
          if (solveSudoku(board)) {
            //如果通过说明已经放置好下一个，直接返回true
            return true
          }
          // 如果未通过，则需要将上次放置的k重置
          board[i][j] = '.'
        }
      }
      // 前面并没有return结束说明不满足valid函数，直接false
      return false
    }
  }
  // 放置完成一个k，则最终返回true
  return true
};
var isValid = function (board, row, col, k) {
  for (let i = 0; i < 9; i++) {
    // 判断当分别作为行或列时不符合的情况
    if (board[i][col] === k || board[row][i] === k) {
      return false
    }
  }
  // 判断每个3*3格子内数字不同
  // 先拿到每个3*3的行与列数值
  const r = Math.floor(row / 3) * 3
  const c = Math.floor(col / 3) * 3
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      // 在9宫格内的偏移量为3
      if (board[r + i][c + j] === k) {
        return false
      }
    }
  }
  return true
}
// @lc code=end

