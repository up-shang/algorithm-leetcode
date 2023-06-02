/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // 滑动窗口
  // 定义左指针
  let left = 0
  let ret = 0
  // 定义出现重复字符的索引
  const map = new Map()
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i]) && map.get(s[i]) >= left) {
      // 前进一位，丢弃掉重复的这一个数字
      left = map.get(s[i]) + 1
    }
    // 每次判断谁最大
    ret = Math.max(ret, i - left + 1)
    // 每次都更新下值索引记录最新比对位置
    map.set(s[i], i)
  }
  return ret
};
// @lc code=end

