/*
 * @lc app=leetcode.cn id=933 lang=javascript
 *
 * [933] 最近的请求次数
 */

// @lc code=start

var RecentCounter = function() {
  this.timeArr = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  this.timeArr.push(t)
  // 如果当前时间小则移除统计此次请求
  while (this.timeArr[0] < t - 3000) {
    this.timeArr.shift()
  }
  // 返回剩余的请求总数
  return this.timeArr.length
};


/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// @lc code=end

