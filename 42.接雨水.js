/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  // 左侧计数
  let leftCur = 0
  // 右侧计数
  let rightCur = height.length - 1
  // 左侧最高
  let leftMax = 0
  // 右侧最高
  let rightMax = 0
  // 总蓄水量
  let res = 0
  while (leftCur < rightCur) {
    const left = height[leftCur], right = height[rightCur]
    // 决定最终蓄水量的是左右指针中小的那个max，不然存不住水
    if (left < right) {
      leftMax = Math.max(left, leftMax)
      res += leftMax - left
      leftCur++
    } else {
      rightMax = Math.max(right, rightMax)
      res += rightMax - right
      rightCur--
    }
  }
  return res
};
// @lc code=end

