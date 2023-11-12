/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  // 先按照左区间排序，排序后后续判断条件更清晰
  intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]
    } else {
      return a[0] - b[0]
    }
  })
  // 
  let left = intervals[0][0]
  let right = intervals[0][1]
  let i = 1
  // 排序后，left <= start
  // right > start时有两种情况（判断right与end）
  // right <=end时，区间重叠需要合并，删掉两个，再插入一个新的区间
  // right > end时，区间直接包含，直接删掉当前索引区间即可
  // right < start时，5️无重叠区间，继续往后循环遍历即可
  while (i < intervals.length) {
    const [start, end] = intervals[i]
    if (right >= start) {
      if (right <= end) {
        intervals.splice(i - 1, 2, [left, end])
        // 记得合并后，right需要更新为end的值
        right = end
      } else {
        // 直接使用left right 覆盖 start end
        intervals.splice(i, 1)
      }
    } else {
      // 无重叠区间时，继续往后迭代
      left = start
      right = end
      i++
    }
  }
  return intervals
};
// @lc code=end

