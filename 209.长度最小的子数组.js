/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  // 滑动窗口与快慢指针
  // 当找到sum > target时，去滑动窗口，找到最小的窗口赋值给result
  let len = nums.length
  let slow = fast = 0
  let sum = 0
  let result = len + 1
  while (fast < len) {
    sum += nums[fast++] // 取完当前fast的值后，fast+1
    // 当sum>target时，像右滑动窗口缩小范围
    while (sum >= target) {
      let subLen = fast - slow
      // 与上次result对比，更新最短的result值
      result = result > subLen ? subLen : result
      sum -= nums[slow++]
    }
  }
  // 如果result > len说明不满足条件返回0
  return result > len ? 0 : result
};
// @lc code=end

