/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
*/
var maxSubArray = function (nums) {
  let dp = new Array(nums.length).fill(0)
  dp[0] = nums[0]
  let ret = nums[0]
  for (let i = 1; i < nums.length; i++) {
    // 两种情况可以到达dp[i],前一个+当前；或者直接舍弃原来的，使用当前的
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
    // 每次记得比对更新结果集
    ret = Math.max(dp[i], ret)
  }
  return ret
};
var maxSubArray1 = function (nums) {
  let ret = -Infinity
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    count += nums[i]
    if (count > ret) {
      ret = count
    }
    // 如果小于0，说明不能连续最大，则需清0重新算
    if (count < 0) {
      count = 0
    }
  }
  return ret
};
// @lc code=end

