/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // 去掉所有非数字字母
  // 移除所有空格
  // 小写
  const str = s.replace(/[^a-zA-Z0-9]/g, "").replace(/\s/g, "").toLowerCase();
  let left = 0
  let right = str.length - 1
  while (left <= right) {
    if (str[left] !== str[right]) {
      return false
    }
    left++
    right--
  }
  return true
};
// @lc code=end

