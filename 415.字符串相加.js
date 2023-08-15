/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  const maxLen = Math.max(num1.length, num2.length)
  const x = num1.padStart(maxLen, 0)
  const y = num2.padStart(maxLen, 0)
  let sum = ''
  let cur = 0
  let f = 0
  for (let i = maxLen - 1; i >= 0; i--) {
    cur = parseInt(x[i]) + parseInt(y[i]) + f
    sum = cur % 10 + sum // 从个位开始拼接
    f = Math.floor(cur / 10) // 进位 0 or 1
  }
  if (f === 1) {
    sum = '1' + sum
  }
  return sum
};
// @lc code=end

