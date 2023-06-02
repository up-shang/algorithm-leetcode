/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return ''
  let ret = ''
  const str = strs[0]
  for (let j = 0; j < str.length; j++) {
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][j] !== str[j]) return ret
    }
    ret = str.slice(0, j + 1)
  }
  return ret
};
// @lc code=end

