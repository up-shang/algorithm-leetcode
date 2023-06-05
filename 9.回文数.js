/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const tmp = x.toString()
  let left = 0
  let right = tmp.length - 1
  while (left < right) {
    if (tmp[left] !== tmp[right]) {
      return false
    }
    left++
    right--
  }
  return true
};
// @lc code=end

