/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  //使用set结构去重即可
  const retSet = new Set()
  const nums1Set = new Set(nums1)
  for (let n of nums2) {
    if (nums1Set.has(n)) {
      retSet.add(n)
    }
  }
  return Array.from(retSet)
};
// @lc code=end

