/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let map = new Map()
  while (true) {
    if (n === 1) return true // 为1，返回true
    if (map.get(n)) return false // 出现死循环
    map.set(n, true) // 记录存储每次得到的sum
    n = getNum(n) // 更新每次的sum
  }
};

var getNum = function (n) {
  let sum = 0
  while (n) {
    // 每次取个数的平方
    sum += (n % 10) ** 2
    // 每次取出移除个位后的数, 最终向下取整总会为0
    n = Math.floor(n / 10)
  }
  return sum
}
// @lc code=end

