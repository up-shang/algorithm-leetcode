/*
 * @lc app=leetcode.cn id=673 lang=javascript
 *
 * [673] 最长递增子序列的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
  let maxLen = 0, ans = 0
  // 统计最长递增序列长度的dp
  let dp = new Array(nums.length).fill(1)
  // 统计计数的dp
  let cnt = new Array(nums.length).fill(1)
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        if (dp[j] + 1 > dp[i]) {
          // 最长递增变长，重制dp[i]
          dp[i] = dp[j] + 1
          //需重制计数
          cnt[i] = cnt[j]
        } else if (dp[j] + 1 === dp[i]) {
          //递增序列无变化，dp[i]无需变化，cnt+1
          cnt[i] += cnt[j] // 计数为当前计数+上一个的计数
        }
      }
    }
    if (dp[i] > maxLen) {
      maxLen = dp[i]
      // 重制ans为当前计数
      ans = cnt[i]
    } else if (dp[i] === maxLen) {
      ans += cnt[i] // 加上当前计数
    }
  }
  return ans
};
// @lc code=end

