// https://leetcode.com/problems/linked-list-cycle/

// 1. 暴力解法(brute force): 迭代节点, 存储或进行标记, 如果遇见已经存在的记录, 则说明存在环形

// 2. 快慢双指针(龟兔赛跑):
// slow速度为1, fast为2, 若fast遇见了slow(地球是圆的), 则说明存在环形

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 判断链表是否存在环形
 *
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function (head) {
  let slow = head,
    fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
};