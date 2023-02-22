/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // 如果直接length不等，则不满足要求
  if (s.length !== t.length) return false
  const map = new Map()
  // 遍历s，使用map分别对s与t进行计数，s与t的不同索引位的字符最终需平衡为0则true，否则false
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i])) {
      let curS = map.get(s[i])
      map.set(s[i], curS + 1)
    } else {
      map.set(s[i], 1)
    }
    if (map.get(t[i])) {
      let curT = map.get(t[i])
      map.set(t[i], curT - 1)
    } else {
      map.set(t[i], -1)
    }
  }
  // 遍历map，val有不为0则false
  for (let [key, val] of map) {
    if (val !== 0) return false
  }
  return true
};
// @lc code=end

