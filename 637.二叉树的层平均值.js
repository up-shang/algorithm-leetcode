/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
var averageOfLevels = function (root) {
  const ret = []
  if (!root) return ret
  let queue = [root]
  while (queue.length) {
    // 当前层级len,originLen用于计算平均值
    let originLen = curLen = queue.length
    // 当前层级节点数组
    let sum = 0
    while (curLen > 0) {
      const curNode = queue.shift()
      sum += curNode.val
      curNode.left && queue.push(curNode.left)
      curNode.right && queue.push(curNode.right)
      curLen--
    }
    ret.push(sum / originLen)
  }
  return ret
};
// @lc code=end

