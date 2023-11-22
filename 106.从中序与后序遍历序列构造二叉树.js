/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if (postorder.length === 0) return null
  // 找到根节点，后续遍历的最后一位为树的根节点
  const root = new TreeNode(postorder[postorder.length - 1])
  // 找到中序遍历的中间分割点为root
  const mid = inorder.indexOf(postorder[postorder.length - 1])
  const inLeft = inorder.slice(0, mid)
  const inRight = inorder.slice(mid + 1)
  // 后续的左子树为0到中序中部mid的范围
  const postLeft = postorder.slice(0, inLeft.length)
  // 后续的右子树为中序中部mid到后续尾部的范围
  const postRight = postorder.slice(inLeft.length, postorder.length - 1)
  root.left = buildTree(inLeft, postLeft)
  root.right = buildTree(inRight, postRight)
  return root
};
// @lc code=end

