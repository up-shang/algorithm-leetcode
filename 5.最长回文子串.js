/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let max = ''
  for (let i = 0; i < s.length; i++) {
    // 从奇与偶两次中判断寻找最大子串
    helper(i, i)
    helper(i, i + 1)
  }
  function helper(m, n) {
    while (m >= 0 && n < s.length && s[m] === s[n]) {
      m--
      n++
    }
    // 不满足条件后，取m+1与n-1范围内的子串
    // 当前length大于上一个max length时再替换
    if (n - m - 1 > max.length) {
      max = s.slice(m + 1, n)
    }
  }
  return max
};
// @lc code=end

