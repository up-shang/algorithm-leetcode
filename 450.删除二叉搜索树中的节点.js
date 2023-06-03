/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  if (!root) {
    return null
  } else if (root.val === key) {
    return transform(root.left, root.right)
  } else if (root.val > key) {
    // 往左查找，并返回删除节点后的左子树
    root.left = deleteNode(root.left, key)
  } else if (root.val < key) {
    // 往右查找，并返回删除节点后的右子树
    root.right = deleteNode(root.right, key)
  }
  return root
};
// 删除根节点
// 不存在右侧，则返回左侧为整个树
// 存在右侧，则将右侧的左子树拼接为左子树的右树，右子树不变
function transform(left, right) {
  if (!right) return left
  right.left = transform(left, right.left)
  return right
}
// @lc code=end

