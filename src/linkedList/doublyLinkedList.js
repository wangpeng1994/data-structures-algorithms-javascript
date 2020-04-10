function DoublyLinkedList () {

  let Node = function (element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  };

  let length = 0;
  let head = null;
  let tail = null;

  /**
   * 从任意位置添加节点
   *
   * @param {number} position
   * @param element
   * @returns {boolean}
   */
  this.insert = function (position, element) {

    if (position >= 0 && position <= length) {

      let node = new Node(element),
        current = head,
        previous,
        index = 0;

      if (position === 0) {

        if (!head) { // 第一项
          head = node;
          tail = node;
        } else if (position === length) { // 最后一项
          current = tail;
          current.next = node;
          node.prev = current;
          tail = node;
        } else {
          while (index++ < position) {
            previous = current;
            current = current.next;
          }
          previous.next = node;
          node.next = current;
          current.prev = node;
          node.prev = previous;
        }

        length++;

        return true;
      } else {
        return false;
      }
    }
  };

  /**
   * 从任意位置移除元素
   *
   * @param position
   * @returns {element|null}
   */
  this.removeAt = function (position) {

    if (position >= 0 && position < length) {

      let current = head,
        previous,
        index = 0;

      if (position === 0) { // 第一项
        head = current.next;
        // 如果只有一项，需要更新tail
        if (length === 1) {
          tail = null;
        } else {
          head.prev = null;
        }
      } else if (position === length - 1) { // 最后一项
        current = tail;
        tail = current.prev;
        tail.next = null;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
        current.next.prev = previous;
      }

      length--;

      return current.element;
    } else {
      return null;
    }
  };

}
