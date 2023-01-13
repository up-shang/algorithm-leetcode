/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start

var MyStack = function () {
  // 进入队列
  this.queue1 = []
  // 缓存队列
  this.queue2 = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue1.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  // 如果1队列无值，则从缓存队列2中全部取出放入，操作时交换双方即可
  if (!this.queue1.length) {
    [this.queue1, this.queue2] = [this.queue2, this.queue1]
  }
  // 栈需要后入先出，故需先弹出队列的前置元素，留下栈顶元素返回
  while (this.queue1.length > 1) {
    // 队列2缓存下队列1的头部弹出元素
    this.queue2.push(this.queue1.shift())
  }
  return this.queue1.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  // 获取栈顶元素后记得放回栈内
  const x = this.pop()
  this.queue1.push(x)
  return x
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return !this.queue1.length && !this.queue2.length
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

