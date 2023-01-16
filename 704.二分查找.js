/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    // 每次更新通过新的left或者right缩小mid搜索范围，时间复杂度lgn
    // 直到通过mid找到target
    let mid = Math.floor(left + (right - left) / 2)
    if (nums[mid] > target) {
      right = mid - 1
    } else if (nums[mid] < target) {
      left = mid + 1
    } else if (nums[mid] === target) {
      return mid
    }
  }
  return -1
};
// @lc code=end

