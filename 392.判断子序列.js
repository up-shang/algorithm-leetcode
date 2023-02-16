/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence1 = function (s, t) {
  // 贪心，找到后索引+1，然后继续匹配后续的s的字符
  let i = 0, j = 0
  let m = s.length, n = t.length
  // 跳出循环的条件为更长的t循环结束
  while (i < m && j < n) {
    if (s[i] === t[j]) {
      // 如果找到了同一字符，则索引增加后匹配下一个
      i++
    }
    j++
  }
  // 最后查找完后，看是否与s的length相同
  return i === m
};
var isSubsequence = function (s, t) {
  // 动态规划 
  // dp统计的是s在t中出现的次数
  // dp[m][n]最后一个是否等于s的length来确定true or false
  let m = s.length, n = t.length
  let dp = new Array(m + 1).fill(0).map(i => new Array(n + 1).fill(0))
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // 如果上一个值都相等则max+1
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = dp[i][j - 1] // 因为s不需要删除元素，所以只需要j也就是t回退
      }
    }
  }
  // 最后查找完后，看是否与s的length相同
  return dp[m][n] === m
};
// @lc code=end

