/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(null, null)
  let cur = dummy
  while (list1 && list2) {
    if (list1.val < list2.val) {
      // 此处dummy.next指向了头节点
      cur.next = list1
      list1 = list1.next
    } else {
      cur.next = list2
      list2 = list2.next
    }
    // 此后cur节点与dummy节点断开联系，dummy永远指向头节点，cur一直往后遍历
    cur = cur.next
  }
  cur.next = list1 === null ? list2 : list1
  return dummy.next
};
// @lc code=end

