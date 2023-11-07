/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  // 考虑使用双指针比较两个数
  const v1List = version1.split('.')
  const v2List = version2.split('.')
  let p1 = 0, p2 = 0
  while (p1 < v1List.length || p2 < v2List.length) {
    const v1 = parseInt(v1List[p1])
    const v2 = parseInt(v2List[p2])
    if (v1 < v2) {
      return -1
    } else if (v1 > v2) {
      return 1
      // p1结束时，while看后续p2内部有没有大于0的数
    } else if (p1 === v1List.length) {
      if (v2 > 0) {
        return -1
      } else {
        let n2 = p1
        while (n2 < v2List.length) {
          if (parseInt(v2List[n2]) > 0) {
            return -1
          }
          n2++
        }
        return 0
      }
      // // p2结束时，while看后续p1内部有没有大于0的数
    } else if (p2 === v2List.length) {
      if (v1 > 0) {
        return 1
      } else {
        let n1 = p2
        while (n1 < v1List.length) {
          if (parseInt(v1List[n1]) > 0) {
            return 1
          }
          n1++
        }
        return 0
      }
    }
    // 每次比较同位置，所以一起移动指针
    p1++
    p2++
  }
  // 如果length相同，比较到最后走到了这里，说明相等返回0
  return 0
};
// @lc code=end

