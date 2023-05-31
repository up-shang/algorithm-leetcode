/*
 * @lc app=leetcode.cn id=380 lang=javascript
 *
 * [380] O(1) 时间插入、删除和获取随机元素
 */

// @lc code=start

var RandomizedSet = function() {
  this.map = {}
  this.list = []
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (val in this.map) {
    return false
  }
  this.list.push(val)
  this.map[val] = this.list.length - 1 // 记录每个增加的数的索引
  return true
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (val in this.map) {
    const last = this.list[this.list.length - 1]
    const index = this.map[val]
    // 直接替换索引为最后一位的数则完成删除，再去掉多余的最后一位
    this.list[index] = last
    this.map[last] = index
    // 先更新数据，再执行删除操作
    delete this.map[val]
    this.list.pop()
    return true
  } else {
    return false
  }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  return this.list[Math.floor(Math.random() * (this.list.length))]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end

