/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  let ret = []
  let path = []
  // 从0开始查找
  backtrack(0)
  return ret

  function backtrack(i) {
    // 不能改变字符串顺序，故超过4，直接跳出
    // 跳出后，从索引0继续切割，此时会多切割一点字符，从0=》当前for循环的j
    if (path.length > 4) {
      return
    }
    // path为4个时，且i遍历完了所有s字符串时，满足条件push到结果集
    if (path.length === 4 && i === s.length) {
      ret.push(path.join('.'))
      return
    }
    for (let j = i; j < s.length; j++) {
      const str = s.substring(i, j + 1)
      // 判断条件，不能大于255，不能0开头，不满足直接终止for循环
      if (Number(str) > 255) {
        break
      }
      if (str.length > 1 && str[0] === '0') {
        break
      }
      // 截取当前串
      path.push(s.substring(i, j + 1))
      // 从当前串的下一个索引继续回溯查找
      backtrack(j + 1)
      // 满足终止条件后，弹出
      path.pop()
    }
  }
};
// @lc code=end

