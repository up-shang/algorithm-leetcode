/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2)
    // 落在了旋转后的右侧递增数组
    if (nums[mid] < nums[right]) {
      // 此mid有可能是最小值不能舍弃
      right = mid
    } else if (nums[mid] > nums[right]) {
      // 此种情况，一定落在了左侧递增数组上
      left = mid + 1
    }
  }
  // 遍历完的left一定是最小值
  return nums[left]
};
// @lc code=end

