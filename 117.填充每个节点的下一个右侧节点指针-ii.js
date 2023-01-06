/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return root
  const queue = [root]
  while (queue.length) {
    let len = queue.length
    while (len > 0) {
      const curNode = queue.shift()
      if (len > 1) curNode.next = queue[0]
      curNode.left && queue.push(curNode.left)
      curNode.right && queue.push(curNode.right)
      len--
    }
  }
  return root
};
// @lc code=end

