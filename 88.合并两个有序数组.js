/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  // nums1.splice(m, nums1.length - m, ...nums2)
  // nums1.sort((a, b) => a - b)
  const sorted = new Array(m + n).fill(0)
  let p1 = 0, p2 = 0
  let cur
  while (p1 < m || p2 < n) {
    if (p1 === m) {
      // p1 === m说明nums1已经遍历结束一直把cur设置为nums2剩余即可
      cur = nums2[p2++]
    } else if (p2 === n) {
      // p2 === n说明nums2已经遍历结束一直把cur设置为nums1剩余即可
      cur = nums1[p1++]
    } else if (nums1[p1] < nums2[p2]) {
      // 1 与 2都有时比较nums1与2当前指针位置的值谁更小取谁
      cur = nums1[p1++]
    } else {
      cur = nums2[p2++]
    }
    sorted[p1 + p2 - 1] = cur
  }
  for (let i = 0; i < m + n; i++) {
    nums1[i] = sorted[i]
  }
};
// @lc code=end

