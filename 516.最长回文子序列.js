/*
 * @lc app=leetcode.cn id=516 lang=javascript
 *
 * [516] 最长回文子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  const n = s.length
  // 定义0-n为dp的终点
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(0))
  for (let i = n - 1; i >= 0; i--) {
    // 起始就是回文串，初始化为1
    dp[i][i] = 1
    const c1 = s[i]
    for (let j = i + 1; j < n; j++) {
      const c2 = s[j]
      if (c1 === c2) {
        // i向左走，j向右走，所以加2个
        dp[i][j] = dp[i + 1][j - 1] + 2
      } else {
        // 不符合则取上一次最大
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[0][n - 1]
};
// @lc code=end

