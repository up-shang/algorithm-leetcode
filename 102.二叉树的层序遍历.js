/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function (root) {
  // 定义返回值
  const res = []
  if (!root) return res
  // 初始化队列
  const queue = [root]
  // queue.length为动态值，根据数组长度变化
  while (queue.length) {
    // curlen为固定值，每次取二叉树当前层级length
    let curLen = queue.length
    // 缓存当前层级二叉树的val
    const curLevel = []
    while (curLen > 0) {
      // 弹窗当前节点
      const curNode = queue.shift()
      // 按照栈内顺序push到当前层级数组
      curLevel.push(curNode.val)
      // 如果当前遍历节点存在左右子树，则推入队列中
      curNode.left && queue.push(curNode.left)
      curNode.right && queue.push(curNode.right)
      curLen--
    }
    // 每次遍历完一层级，pus到结果数组内
    res.push(curLevel)
  }
  return res
};
// @lc code=end

