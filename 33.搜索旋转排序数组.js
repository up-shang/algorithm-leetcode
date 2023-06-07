/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0, right = nums.length - 1
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2)
    if (nums[mid] === target) return mid
    // mid与left在一侧
    if (nums[left] <= nums[mid]) {
      if (nums[left] > target || nums[mid] < target) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    } else {
      // mid与left不在一侧
      if (nums[right] < target || nums[mid] > target) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
  }
  return -1
};
// @lc code=end

