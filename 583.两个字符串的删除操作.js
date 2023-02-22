/*
 * @lc app=leetcode.cn id=583 lang=javascript
 *
 * [583] 两个字符串的删除操作
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  // dp初始化为二维数组
  // i-1 === j-1时，dp[i][j] = dp[i-1][j-1],无需删除
  // i-1 !== j-1时，dp有三种情况
  // 1，dp[i][j-1] + 1删掉的一步, 2 dp[i-1][j]+ 1删掉的一步, 3 dp[i-1][j-1]+ 2删掉的2步
  const dp = new Array(word1.length + 1).fill(0).map(i => new Array(word2.length + 1).fill(0))

  // 初始化dp[1]
  for (let i = 1; i <= word1.length; i++) {
    dp[i][0] = i // i为删掉word1字符需要的步数 ，删掉后匹配空字符的最小步数
  }
  for (let j = 1; j <= word2.length; j++) {
    dp[0][j] = j // j为删掉word2字符需要的步数 ，删掉后匹配空字符的最小步数
  }
  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] // 无需删除，直接取上次的最小步数
      } else {
        dp[i][j] = Math.min(dp[i][j - 1] + 1,
          dp[i - 1][j] + 1,
          dp[i - 1][j - 1] + 2)
      }
    }
  }
  return dp[word1.length][word2.length]
};
// @lc code=end

