function LinkedList () {

  // 单个节点类
  let Node = function (element) {
    this.element = element;
    this.next = null;
  };

  let length = 0;
  let head = null;

  // 向链表尾部添加一个新的项
  this.append = function (element) {

    let node = new Node(element), current;

    if (head === null) {
      head = node;
    } else {
      current = head;
      // 从表头开始循环找到最后一项
      while (current.next !== null) {
        current = current.next;
      }
      // 把节点链接到最后一项的 next 上
      current.next = node;
    }

    length++; // 更新链表长度
  };

  this.size = function () {
    return length;
  };

  // 从链表指定位置移除元素并返回被移除的元素
  // 被移除的元素被丢弃在计算级内存中，等待被垃圾回收器清理
  this.removeAt = function (position) {

    if (position > -1 && position < length) {

      let current = head,
        previous,
        index = 0;

      // 分两种情况：表头和非表头
      if (position === 0) {
        head = current.next;
      } else {
        // position 的前一个位置时终止循环
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        // 上下节点进行链接，跳过当前节点，从而移除它
        previous.next = current.next;
      }

      length--;

      return current.element;
    } else {
      return null;
    }
  };

}

/* --------------- test ------------------ */

let list = new LinkedList();
list.append(10);
list.append(50);
list.append(20);
list.removeAt(2);
console.log(list.removeAt(1));
list.removeAt(0);

console.log(list.size());
