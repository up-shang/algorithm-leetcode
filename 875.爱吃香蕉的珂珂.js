/*
 * @lc app=leetcode.cn id=875 lang=javascript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
// 典型的考虑二分，找出一个中间大小的节点比对是否可吃完，可吃完则一直缩小范围再优化
// 需要写一个汇总当前速度下吃完所需时间的工具函数
var minEatingSpeed = function(piles, h) {
  let left = 0, right = Math.max(...piles)
  // 判断满足的话，不断优化left，取while后最合适的left
  while (left < right) {
    const mid = left + ((right - left) >> 1)
    if (useTime(piles, mid) <= h) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
};
// 统计当前速度下的用时
function useTime(piles, k) {
  return piles.reduce((pre, cur) => pre + Math.ceil(cur / k), 0)
}
// @lc code=end

