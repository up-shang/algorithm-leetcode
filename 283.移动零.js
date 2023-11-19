/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 快慢指针如果当前为0，slow停止；直到fast不为0时，与slow交换数值，继续向前遍历
 * slow来找0（指向的永远是最左侧的0），fast来遍历，找到0时fast与slow交换位置，把非0数字往左边换
 */
var moveZeroes = function(nums) {
  let slow = 0
  let fast = 0
  while (fast < nums.length) {
    if (nums[fast]) {
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]]
      slow++
    }
    fast++
  }
};
// @lc code=end

