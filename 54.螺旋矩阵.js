/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (matrix.length === 0) return []
  const res = []
  // 找到四个角坐标点，开启爱的魔力转圈圈
  // 左-》右， 上-》下， 右-》左，下-》上
  // 循环2步骤
  // 边界：注意top < bottom; left < right
  let left = 0, right = matrix[0].length - 1, top = 0, bottom = matrix.length - 1
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i])
    }
    top++
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right])
    }
    right--
    if (top > bottom || left > right) break
    for (let i = right; i >= left; i--) {
      res.push(matrix[bottom][i])
    }
    bottom--
    for (let i = bottom; i >= top; i--) {
      res.push(matrix[i][left])
    }
    left++
  }
  return res
};
// @lc code=end

