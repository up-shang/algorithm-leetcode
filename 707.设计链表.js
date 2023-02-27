/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start

var LinkNode = function(val, next) {
  this.val = val
  this.next = next
}
var MyLinkedList = function() {
  this.head = null
  this.tail = null
  this.size = 0
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.getNode = function(index) {
  if (index < 0 || index >= this.size) {
    return -1
  }
  // 定义游标
  let cur = new LinkNode(0, this.head)
  while (index >= 0) {
    cur = cur.next
    index--
  }
  return cur
};
/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  if (index < 0 || index >= this.size) {
    return -1
  }

  return this.getNode(index).val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  // 定义一个head节点的prev节点
  let node = new LinkNode(val, this.head)
  // 将prev改为head节点
  this.head = node
  // size++
  this.size++
  if (!this.tail) {
    this.tail = node
  }
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  let node = new LinkNode(val, null)
  this.size++
  if (this.tail) {
    this.tail.next = node
    this.tail = node
    return
  }
  this.tail = node
  this.head = node
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index > this.size) {
    return
  }
  if (index <= 0) {
    this.addAtHead(val)
    return
  }
  if (index === this.size) {
    this.addAtTail(val)
    return
  }

  let node = this.getNode(index - 1)
  // 左侧next为需要添加到的index，右侧next为改变index节点前的index节点
  node.next = new LinkNode(val, node.next)
  this.size++
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index < 0 || index >= this.size) {
    return
  }
  if (index === 0) {
    this.head = this.head.next
    this.size--
    return
  }
  let node = this.getNode(index - 1)
  node.next = node.next.next
  // 如果index 为最后一个，则修正下最后节点为node，next为null
  if (index === this.size - 1) {
    this.tail = node
  }
  this.size--
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

