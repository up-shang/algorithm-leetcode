/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  let div = Math.abs(dividend)
  let acc = Math.abs(divisor)
  let count = 0
  while (div - acc >= 0) {
    acc += Math.abs(divisor)
    count++
  }
  if ((dividend < 0 && divisor > 0) || (divisor < 0 && dividend > 0)) {
    count = -count
  }
  return count
};
// @lc code=end

