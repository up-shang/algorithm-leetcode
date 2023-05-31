/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  // 维护进位，0或者1 
  let addOne = 0
  let dummy = cur = new ListNode(0)
  // 有进位时也要next一下进位节点，l1 l2存在也要next一下
  while (addOne || l1 || l2) {
    let val1 = l1 ? l1.val : 0
    let val2 = l2 ? l2.val : 0
    let sum = val1 + val2 + addOne
    // 大于10则进1给下次循环用
    addOne = sum >= 10 ? 1 : 0
    cur.next = new ListNode(sum % 10) // 根据10来取余显示
    cur = cur.next
    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }
  return dummy.next
};
// @lc code=end

