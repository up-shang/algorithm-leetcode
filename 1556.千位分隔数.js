/*
 * @lc app=leetcode.cn id=1556 lang=javascript
 *
 * [1556] 千位分隔数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
  // 自己的尝试解法
  // const nStr = n.toString()
  // let len = nStr.length
  // if (len <= 3) return nStr
  // let count = 0
  // let ret = ''
  // for (let i = len - 1; i >= 0; i--) {
  //   ret += nStr[i]
  //   count++
  //   if (count === 3) {
  //     ret += '.'
  //     count = 0
  //   }
  // }
  // const retStr = ret.split('').reverse().join('')
  // return retStr.startsWith('.') ? retStr.slice(1) : retStr

  // 更好的解法
  let count = 0
  let ans = ''
  do {
    const cur = n % 10 // 每次循环拿到当前的个数
    n = Math.floor(n / 10) // 除以10再舍弃最后一位小数，相当于完成了每次循环后剪掉个位
    ans += cur
    count++
    // 注意此时n不能等于0，等于0会把.加到首位
    if (count === 3 && n) {
      ans += '.'
      count = 0
    }
  } while (n)
  return ans.split('').reverse().join('')
};

// @lc code=end

