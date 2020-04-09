// https://leetcode.com/problems/intersection-of-two-linked-lists/

// 1. 暴力解法(brute force): 使用数组或者set存储一条链表所有节点,然后迭代第二条链表进行查找是否存在(略)

// 2. 双指针 two pointers
// 两个链表指针同时从各自表头移动, 速度一致, 当较短的链表(A)跑到头后, 较长的链表(B)就开始顺便重定向头部指针,
// 此后B的前后两个指针之差始终等于A的总长度,
// 然后等到B的后指针也跑到头后, 再同时从A和B的左侧指针开始迭代比较是否相等,找出交点.

// Time complexity : O(m+n)O(m+n).
// Space complexity : O(1)O(1).

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 求两个链表开始交集时的节点
 *
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode|null}
 */
const getIntersectionNode = function (headA, headB) {
  let a = headA,
    b = headB;

  while (a !== null || b !== null) {
    if (a !== null) {
      a = a.next;
    } else {
      headB = headB.next;
    }

    if (b !== null) {
      b = b.next;
    } else {
      headA = headA.next;
    }
  }

  while (headA !== headB) {
    headA = headA.next;
    headB = headB.next;
  }

  return headA;
};
