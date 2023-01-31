/*
 * @lc app=leetcode.cn id=621 lang=javascript
 *
 * [621] 任务调度器
 */

// @lc code=start
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  //先统计每个字母出现的最大次数
  let arr = new Array(26).fill(0)
  for (let t of tasks) {
    // 与A类比得到不同索引的统计次数
    arr[t.charCodeAt() - 'A'.charCodeAt()]++
  }
  // 得到最大出现次数
  let max = Math.max(...arr)
  // 时间先统计max-1的n次数
  // 优先排任务最多的为最小次数，最优解
  let ret = (max - 1) * (n + 1)
  for (let i = 0; i < 26; i++) {
    if (arr[i] === max) {
      // max - 1 后的最后一行的数量，每个只剩下1个，所以++，具体看leetcode上图解
      ret++
    }
  }
  // 最后比较max与length，n较小时最优解可能为length；n大时需填充冷却列，ret为最优解
  return Math.max(ret, tasks.length)
};
// @lc code=end

