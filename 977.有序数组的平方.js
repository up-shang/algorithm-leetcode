/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let left = 0
  let right = nums.length - 1
  const res = Array(nums.length)
  let k = right
  while (left <= right) {
    let l = nums[left] * nums[left]
    let r = nums[right] * nums[right]
    // 观察题目得知数列规律为先递减后递增
    // 所以判断left与right下标处哪个值比较大先放哪个在结果数组最右边
    if (l < r) {
      res[k] = r
      right--
    } else {
      res[k] = l
      left++
    }
    // 返回目标下标一直递减
    k--
  }
  return res
};
// @lc code=end

