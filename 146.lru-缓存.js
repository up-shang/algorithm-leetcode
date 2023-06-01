/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.cache = new Map()
  this.capacity = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  // 每次访问后，记得更新下cache维护到队列最后
  if (this.cache.has(key)) {
    const cache = this.cache.get(key)
    this.cache.delete(key)
    this.cache.set(key, cache)
    return cache
  }
  return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  // 有就直接删掉，再set
  if (this.cache.has(key)) {
    this.cache.delete(key)
    // 如果超了，先删除最不常用的头部cache
  } else if (this.cache.size >= this.capacity) {
    this.cache.delete(this.cache.keys().next().value)
  }
  // 新加入的放后面，排队到最后
  this.cache.set(key, value)
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

