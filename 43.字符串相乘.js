/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 * 后续理解后再来重新看一下！！！！！
 */
var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') return '0'
  let len1 = num1.length, len2 = num2.length, res = new Array(len1 + len2).fill(0) // 最大也就m+n个位的位数
  // 结果最多为 m + n 位数
  // 竖式，从个位每一次乘完后累加起来
  for (let i = len1 - 1; i >= 0; i--) {
    for (let j = len2 - 1; j >= 0; j--) {
      // 从个位数开始，逐步相乘
      const mul = num1[i] * num2[j]
      // 乘积在结果数组中对应的位置
      const p1 = i + j, p2 = i + j + 1
      // 对结果进行累加
      const sum = mul + res[p2]
      res[p1] += Math.floor(sum / 10)
      res[p2] = sum % 10
    }
  }
  if (res[0] === 0) res.shift()
  return res.join("")
};
// @lc code=end

