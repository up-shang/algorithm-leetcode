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
    // map.get(s[i]) >= left需要判断下，某则会出现left比预期靠左的情况（相同的a切换到相同的b时）
    if (map.has(s[i]) && map.get(s[i]) >= left) {
      // 前进一位，丢弃掉重复的这一个数字
      left = map.get(s[i]) + 1
    }
    // 每次判断谁最大,left一直在变大需要max判断哪个是最大的ret
    ret = Math.max(ret, i - left + 1)
    // 每次都更新下值索引记录最新比对位置
    map.set(s[i], i)
  }
  return ret
};
// @lc code=end

