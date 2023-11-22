/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (inorder.length === 0) return null
  // 构造根节点，为preorder的第0个元素
  const root = new TreeNode(preorder[0])
  // 找到preorder[0]在inorder中的位置，为中序的根节点
  const mid = inorder.indexOf(preorder[0])
  // preorder 1 到 mid为前序的左子树，inorder从0到mid为中序的左子树
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid))
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1))
  return root
};
// @lc code=end

