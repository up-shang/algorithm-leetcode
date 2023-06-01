/*
 * @lc app=leetcode.cn id=821 lang=javascript
 *
 * [821] 字符的最短距离
 */

// @lc code=start
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
  // 两次循环，找出左侧与右侧最优解
  // 初始化为最大值-n i为0时，最远为n
  const answer = new Array(s.length).fill(0)
  for (let i = 0, idx = -s.length; i < s.length; i++) {
    if (s[i] === c) {
      idx = i
    }
    answer[i] = i - idx
  }
  // 初始化2n，i为n时 = n
  for (let i = s.length - 1, idx = 2 * s.length; i >= 0; i--) {
    if (s[i] === c) {
      idx = i
    }
    // 左右遍历后取最小值更新当前距离
    answer[i] = Math.min(answer[i], idx - i)
  }
  return answer
};
// @lc code=end

