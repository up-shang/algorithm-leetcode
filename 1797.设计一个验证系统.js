/*
 * @lc app=leetcode.cn id=1797 lang=javascript
 *
 * [1797] 设计一个验证系统
 */

// @lc code=start
/**
 * @param {number} timeToLive
 */
var AuthenticationManager = function(timeToLive) {
  this.timeToLive = timeToLive
  this.manager = new Map()
};

/** 
 * @param {string} tokenId 
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.generate = function(tokenId, currentTime) {
  this.manager.set(tokenId, currentTime)
};

/** 
 * @param {string} tokenId 
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.renew = function(tokenId, currentTime) {
  if (this.manager.has(tokenId)) {
    const time = this.manager.get(tokenId)
    if (time + this.timeToLive > currentTime) {
      this.manager.set(tokenId, currentTime)
    }
  }
};

/** 
 * @param {number} currentTime
 * @return {number}
 */
AuthenticationManager.prototype.countUnexpiredTokens = function(currentTime) {
  let result = 0
  for (const time of this.manager.values()) {
    // 未过期
    if (time + this.timeToLive > currentTime) {
      result += 1
    }
  }
  return result
};

/**
 * Your AuthenticationManager object will be instantiated and called as such:
 * var obj = new AuthenticationManager(timeToLive)
 * obj.generate(tokenId,currentTime)
 * obj.renew(tokenId,currentTime)
 * var param_3 = obj.countUnexpiredTokens(currentTime)
 */
// @lc code=end

