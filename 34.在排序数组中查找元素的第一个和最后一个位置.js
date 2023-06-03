/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let ans = [-1, -1]
  const leftIndex = helper(nums, target, true)
  // 索引减1才代表最后一个等于target的值
  const rightIndex = helper(nums, target, false) - 1
  // 确认找到了等于target时，才赋值
  if (nums[leftIndex] === target && nums[rightIndex] === target) {
    ans = [leftIndex, rightIndex]
  }
  return ans

};
// lower 为true查找左侧第一个
// lower 为false查找右侧最后一个，最先大于target的值
function helper(nums, target, lower) {
  let left = 0, right = nums.length - 1, ans = nums.length
  while (left <= right) {
    const midIndex = Math.floor(left + (right - left) / 2)
    const mid = nums[midIndex]
    if (mid > target || (lower && mid >= target)) {
      right = midIndex - 1
      ans = midIndex
    } else {
      left = midIndex + 1
    }
  }
  return ans
}
// @lc code=end

