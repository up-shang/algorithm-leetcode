/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  // 相交节点前路径分别为a与b，相交部分为c
  // 遍历完两个链表走的路径分别为a+c,b+c
  // 当遍历链表a与b结束后，分别反转到对方链表,则a+c+b一定等于b+c+a
  let curA = headA
  let curB = headB
  while (curA !== curB) {
    curA = !curA ? headB : curA.next
    curB = !curB ? headA : curB.next
  }
  return curB
};
// @lc code=end

