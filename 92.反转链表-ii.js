/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let dummy = new ListNode(null, head)
  let tmp = dummy
  // 遍历链表到left节点的前置节点
  for (let i = 0; i < left - 1; i++) {
    tmp = tmp.next
  }
  // left节点
  let prev = tmp.next
  // left节点的next节点
  let cur = prev.next
  //反转left与right之间的链表节点
  for (let j = 0; j < right - left; j++) {
    // 从cur节点开始反转
    let next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  // 反转完链表需要修正下反转链表的头尾节点指针指向
  // tmp.next需要指向prev，tmp.next(对应例子的2节点).next需要指向cur尾部next节点
  tmp.next.next = cur
  tmp.next = prev
  return dummy.next
};
// @lc code=end

