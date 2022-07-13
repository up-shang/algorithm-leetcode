/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 找出跳跃得范围，并增大for循环length，碰到0会停止for循环
var canJump = function(nums) {
  let cover = 0
  for(let i=0; i<=cover; i++) {
    cover = Math.max(cover, i + nums[i])
    if(cover >= nums.length - 1) return true
  }
  return false
};
// @lc code=end

