/*
 * @lc app=leetcode.cn id=1663 lang=javascript
 *
 * [1663] 具有给定数值的最小字符串
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function(n, k) {
  let ans = ''
  for (let i = 1; i <= n; i++) {
    // 贪心
    // 最大可选范围 （n-i）*26，最小可选为1
    // 找出最大的剩余位置的可选数，当前位置就是最小的字典可选
    let lower = Math.max(1, k - (n - i) * 26)
    // 更新剩余数值
    k -= lower
    // a在题解中为1开头，故需减1来匹配
    ans += String.fromCharCode('a'.charCodeAt() + lower - 1)
  }
  return ans
};
// @lc code=end

