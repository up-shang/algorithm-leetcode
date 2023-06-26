/*
 * @lc app=leetcode.cn id=735 lang=javascript
 *
 * [735] 行星碰撞
 */

// @lc code=start
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  const stack = []
  for (let ast of asteroids) {
    // 如果上来就是负数则直接向左移动永远不会碰撞，不需要处理
    if (ast < 0) {
      // 当栈内有值，且最后一个数为正数且小于当前ast时直接碰撞失败，出栈
      // 要一直循环，一直测试碰撞不满足后结束当前while
      while (stack.length && stack[stack.length - 1] > 0 && stack[stack.length - 1] < -ast) {
        stack.pop()
      }
      // 相等时则直接抵消，执行一次即可
      if (stack.length && stack[stack.length - 1] > 0) {
        // 相等则两个都毁灭，直接pop
        if (stack[stack.length - 1] === -ast) {
          stack.pop()
        }
        // 不管相等，还是小于栈内当前的正数，都直接舍弃，终止本次循环不再入栈
        continue
      }
    }
    // 正的直接入栈，等待与负的进行碰撞试验
    stack.push(ast)
  }
  return stack
};
// @lc code=end

