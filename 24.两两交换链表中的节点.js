/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let dummy = new ListNode(0, head)
  let cur = dummy
  while (cur.next && cur.next.next) {
    const first = cur.next
    const second = cur.next.next
    // 交换节点的三行操作，1指向3，2指向1，cur指向2
    first.next = second.next
    second.next = first
    cur.next = second
    // 移动到每次交换后的第二个节点，下次while进来时就会从第二个节点的next开始替换
    cur = cur.next.next
  }
  // 指向哨兵节点的next就是头节点
  return dummy.next
};
// @lc code=end

