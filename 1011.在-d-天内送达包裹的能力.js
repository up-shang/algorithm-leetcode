/*
 * @lc app=leetcode.cn id=1011 lang=javascript
 *
 * [1011] 在 D 天内送达包裹的能力
 */

// @lc code=start
/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
  // 注意题意，days不会超过weights.length，所以left最小也要是weight的最大值
  let left = Math.max(...weights), right = weights.reduce((pre, cur) => pre + cur)
  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    let cur = 0 // 当天的运输量
    let useDay = 1 //使用的天数
    for (let weight of weights) {
      // 如果 > mid，则所用的days加1,并重置cur为0
      if (cur + weight > mid) {
        useDay++
        cur = 0
      }
      // 不管是否重置，每次都要加上当前遍历的weight
      cur += weight
    }
    // 小于需要的days说明有优化空间，right可以减小
    if (useDay <= days) {
      right = mid
      // 大于了需要增加left
    } else {
      left = mid + 1
    }
  }
  return left
};
// @lc code=end

