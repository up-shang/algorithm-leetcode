/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
var zigzagLevelOrder = function(root) {
  if (!root) return []
  const queue = [root]
  const ret = []
  // 定义迭代中的左或右优先
  let isOrderLeft = true;
  while (queue.length) {
    const curLevel = []
    let curLen = queue.length
    while (curLen) {
      const node = queue.shift()
      if (isOrderLeft) {
        // 左侧val在队列头部
        curLevel.push(node.val)
      } else {
        // 右侧val在队列头部
        curLevel.unshift(node.val)
      }
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
      curLen--
    }
    // 一层遍历完，转换锯齿遍历顺序且更新结果集
    isOrderLeft = !isOrderLeft
    ret.push(curLevel)
  }
  return ret
};
// @lc code=end

