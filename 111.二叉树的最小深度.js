/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) {
    return 0
  }
  if (!root.left && !root.right) {
    return 1
  }
  let res = Number.MAX_SAFE_INTEGER
  // 左侧树得到最小层级
  if (root.left) {
    res = Math.min(minDepth(root.left), res)
  }
  // 遍历右侧后与左侧对比得出最小层级
  if (root.right) {
    res = Math.min(minDepth(root.right), res)
  }
  // 子树最小层级 + 根节点层级1
  return res + 1
}
// @lc code=end

