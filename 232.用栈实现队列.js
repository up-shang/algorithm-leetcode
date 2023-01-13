/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start

var MyQueue = function () {
  // 接收数据栈
  this.stack1 = []
  // 缓存栈
  this.stack2 = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack1.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.stack2.length) {
    return this.stack2.pop()
  }
  while (this.stack1.length) {
    // 此时先进入的数据，会在stack2的数组末尾
    this.stack2.push(this.stack1.pop())
  }
  return this.stack2.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  const x = this.pop()
  // 放回队列内,使用的栈2作为队列输出使用
  this.stack2.push(x)
  return x
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.stack1.length && !this.stack2.length
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

