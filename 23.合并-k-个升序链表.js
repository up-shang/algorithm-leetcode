/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (lists.length === 0) return null
  return mergeList(lists)
};
// 归并排序
var mergeList = function(lists) {
  if (lists.length === 1) return lists[0]
  const mid = lists.length >> 1
  const left = lists.slice(0, mid)
  const right = lists.slice(mid, lists.length)
  const leftList = mergeList(left)
  const rightList = mergeList(right)
  return merge(leftList, rightList)
}
// 排序两个链表
var merge = function(head1, head2) {
  // 定义基准点与游标
  let flag = p = new ListNode(0)
  // 排序链表
  while (head1 && head2) {
    if (head1.val > head2.val) {
      p.next = head2
      head2 = head2.next
    } else {
      p.next = head1
      head1 = head1.next
    }
    p = p.next
  }
  // 剩余有序链表直接排序
  p.next = head1 ? head1 : head2
  return flag.next
}
// @lc code=end

