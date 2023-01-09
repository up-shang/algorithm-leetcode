/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
  const ret = []
  if (!root) return ret
  const queue = [root]
  while (queue.length) {
    let curLen = queue.length
    let curMax = -Infinity
    while (curLen > 0) {
      const curNode = queue.shift()
      curMax = Math.max(curMax, curNode.val)
      curNode.left && queue.push(curNode.left)
      curNode.right && queue.push(curNode.right)
      curLen--
    }
    ret.push(curMax)
  }
  return ret
};
// @lc code=end

