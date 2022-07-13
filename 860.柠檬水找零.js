/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */
//三种方式
// 给5 直接拿着
// 给10 找回5
// 给20 找10+5 或5+5+5
//利用贪心，20时优先给10
// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let fiveNum = 0
  let tenNum = 0
  for(let i=0; i<bills.length; i++) {
    let bill = bills[i]
    if(bill === 5) {
      fiveNum += 1
    } else if(bill === 10) {
      if(fiveNum > 0) {
        fiveNum -= 1
        tenNum += 1
      } else {
        return false
      }
    } else {
      if(tenNum > 0 && fiveNum > 0) {
        tenNum -= 1
        fiveNum -= 1
      } else if (fiveNum > 2) {
        fiveNum -= 3
      } else {
        return false
      }
    }
  }
  return true
};
// @lc code=end

