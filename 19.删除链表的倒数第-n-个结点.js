/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 使用dummy节点解决slow的next为倒数第n节点
  let dummy = new ListNode(null, head)
  let slow = fast = dummy
  // 快慢指针，fast先走n步
  while (n--) {
    fast = fast.next
  }
  // 慢指针走，当fast.next为null时，慢指针的next节点刚好在倒数n节点
  while (fast.next !== null) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return dummy.next
};
// @lc code=end

