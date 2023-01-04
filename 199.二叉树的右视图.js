/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
var rightSideView = function (root) {
  // 核心使用队列遍历方式，层序遍历
  let ret = []
  if (!root) return ret
  let queue = [root]
  while (queue.length) {
    // 当前层级length
    let curLen = queue.length
    let curVal
    while (curLen > 0) {
      const curNode = queue.shift()
      if (curLen === 1) curVal = curNode.val
      curNode.left && queue.push(curNode.left)
      curNode.right && queue.push(curNode.right)
      curLen--
    }
    ret.push(curVal)
  }
  return ret
};
// @lc code=end

