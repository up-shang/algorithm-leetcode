/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
  let m = nums1.length, n = nums2.length
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
  let ans = 0
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (nums1[i] === nums2[j]) {
        // 等则看下相邻的dp是多少再累加一下
        dp[i][j] = dp[i + 1][j + 1] + 1
      } else {
        // 不等则为0
        dp[i][j] = 0
      }
      ans = Math.max(ans, dp[i][j])
    }
  }
  return ans
};
// @lc code=end

