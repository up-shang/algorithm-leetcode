/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[1] - b[1])
  let count = 1
  // 起始的右侧end点
  let end = intervals[0][1]
  for (let i = 1; i < intervals.length; i++) {
    //注意start与end相等不算重叠
    if (intervals[i][0] >= end) {
      // 如果不重叠则更新下end为当前索引的end
      end = intervals[i][1]
      // 此count记录的是不重叠的所有区间
      count++
    }
  }
  // 总空间 - 不重叠的空间 = 需要移除的空间数
  return intervals.length - count
};
// @lc code=end

