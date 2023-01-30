/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */
// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let ret = []
  let path = []
  backtrack(0)
  return ret
  /**
   * 
   * @param {*} s 串
   * @param {*} l 截取串的左侧
   * @param {*} r 截取串的右侧
   * @returns 
   */
  function isPalindrome(s, l, r) {
    while (l < r) {
      if (s[l] !== s[r]) {
        return false
      }
      l++
      r--
    }
    return true
  }
  function backtrack(index) {
    if (index >= s.length) {
      ret.push([...path])
      return
    }
    // 注意题意，切割，故每次回溯应从当前已切割后的index开始遍历
    for (let j = index; j < s.length; j++) {
      // 每次都应该判断下是否切完的字符串为回文串
      if (!isPalindrome(s, index, j)) {
        continue
      }
      // 每次push进去截取后的s，index到j
      // substring不包含尾部index需要+1
      path.push(s.substring(index, j + 1))
      // push完后，从切割后的j+1开始再回溯下一次
      backtrack(j + 1)
      // 根据边界条件s.length后，pop出path，继续后续for循环
      path.pop()
    }
  }
};
// @lc code=end

