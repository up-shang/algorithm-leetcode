/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number} 
 */
var findMinArrowShots = function (points) {
  points.sort((a, b) => a[0] - b[0])
  let ret = 1
  for (let i = 1; i < points.length; i++) {
    // 此种情况说明相邻完全无交叉，直接需要另一只箭
    if (points[i][0] > points[i - 1][1]) {
      ret++
    } else {
      //贪心，每次取交叉部分更小的末端，用于与下一个数对比，来获取更大的交叉范围
      points[i][1] = Math.min(points[i][1], points[i - 1][1])
    }
  }
  return ret
};
// @lc code=end

