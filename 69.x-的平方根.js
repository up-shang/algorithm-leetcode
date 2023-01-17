/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  // 因为返回整数部分，直接可以采用二分查找，最大为x,最小为0
  let left = 0
  let right = x
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2)
    if (mid * mid > x) {
      // 直接舍弃mid，right = mid - 1
      right = mid - 1
    } else if (mid * mid < x) {
      left = mid + 1
    } else if (mid * mid === x) {
      return mid
    }
  }
  // 返回不满足条件跳出while循环后的较小的right，此时left已经大于rigth
  return right
};
// @lc code=end

