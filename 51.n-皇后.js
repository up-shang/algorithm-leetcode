/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  // 结果集
  let res = []
  let path = []
  // 从0行开始查找，初始传入path临时变量
  backtrack(0, path)
  return res
  /**
   * 
   * @param {*} row 当前皇后所处的row
   * @param {*} tmp 记录上一个皇后的位置与当前皇后做比较
   */
  function backtrack(row, tmp) {
    // 边界条件
    // 如果最终遍历完当前层级backtrack，但是不等于n则说明有存在皇后相互攻击不满足的情况，这种则不能push到最终结果集
    if (row === n) {
      // arr为n的数组，每次通过记录行内col位置的tmp来替换queen的位置，并join返回字符串push到res内
      res.push(tmp.map(c => {
        let arr = new Array(n).fill('.')
        arr[c] = 'Q'
        return arr.join('')
      }))
    }
    for (let col = 0; col < n; col++) {
      // some函数第一个代表值，第二个参数为值所在索引
      // 每行只向tmp内增加一个数，故索引可代表row，value可代表col
      let canNotSet = tmp.some((c, r) => {
        // 此处四种情况会导致皇后相互攻击
        // 横，竖，以及两种斜向（分别判断+或者-即可）
        return r === row || (c === col) || ((r + c) === (row + col)) || ((r - c) === (row - col))
      })
      // 满足canNotSet则失败，跳过
      if (canNotSet) {
        continue
      }
      // 继续向下查找，并向tmp内增加一个数值，当前的col
      // 这里数据模型比较复杂，主要可以遍历完棋盘的所有情况
      // 主要是从第一列开始，遍历完第一列的所有行情况，再继续遍历完第二列的所有行情况，最终遍历完第n列的所有行情况
      // 每次row都从最外层传入的0开始往第n行寻找，每个递归深度内的row都是隔离不相干的
      backtrack(row + 1, [...tmp, col])
    }
  }
};
// @lc code=end

