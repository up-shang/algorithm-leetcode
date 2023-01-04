/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  let res = []
  if (!root) return res
  let queue = [root]
  while (queue.length) {
    let curLen = queue.length
    let curLevel = []
    while (curLen > 0) {
      const curNode = queue.shift()
      curLevel.push(curNode.val)
      curNode.left && queue.push(curNode.left)
      curNode.right && queue.push(curNode.right)
      curLen--
    }
    res.unshift(curLevel)
  }
  return res
};
// @lc code=end

