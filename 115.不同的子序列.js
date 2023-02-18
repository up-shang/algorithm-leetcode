/*
 * @lc app=leetcode.cn id=115 lang=javascript
 *
 * [115] 不同的子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  let dp = new Array(s.length + 1).fill(0).map(i => new Array(t.length + 1).fill(0))
  // 填充dp[i][0] = 1
  for (let i = 0; i < s.length; i++) {
    dp[i][0] = 1
  }
  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= t.length; j++) {
      if (s[i - 1] === t[j - 1]) {
        // 当前[i-1][j-1]+上一次最大值[i-1][j]
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
      } else {
        // 不满足，则回退到上一个统计的最大值
        // t不需要移除元素，故j不需要-
        dp[i][j] = dp[i - 1][j]
      }
    }
  }
  return dp[s.length][t.length]
};
// @lc code=end

