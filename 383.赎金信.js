/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false
  const obj = {}
  for (let i = 0; i < magazine.length; i++) {
    if (i < ransomNote.length) {
      if (obj[ransomNote[i]]) {
        obj[ransomNote[i]] += 1
      } else {
        obj[ransomNote[i]] = 1
      }
    }
    if (obj[magazine[i]]) {
      obj[magazine[i]] -= 1
    } else {
      obj[magazine[i]] = -1
    }
  }
  return Object.keys(obj).every(key => obj[key] <= 0)
};
// @lc code=end

