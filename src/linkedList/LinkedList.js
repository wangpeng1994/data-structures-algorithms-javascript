function LinkedList() {

  // 单个节点类，表示要加入到链表中的项
  let Node = function (element) {
    this.element = element;
    this.next = null;
  };

  let length = 0; // 内部私有变量，记录链表长度
  let head = null; // 头指针

  /**
   * 向链表尾部添加一个新的项
   *
   * @param element
   */
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

  /**
   * 从任意位置移除元素并返回被移除的元素
   * 两种场景：移除第一个元素；移除第一个以外的任一元素。
   * 被移除的元素被丢弃在计算机内存中，等待被垃圾回收器清理。
   *
   * @param {number} position
   * @returns {element|null}
   */
  this.removeAt = function (position) {

    // 检查是否越界
    if (position >= 0 && position < length) {

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
        // 上下节点进行链接，跳过中间将被移除的 current 节点
        previous.next = current.next;
      }

      length--;

      return current.element;
    } else {
      return null;
    }
  };

  /**
   * 在任意位置插入元素
   *
   * @param {number} position
   * @param element
   * @returns {boolean}
   */
  this.insert = function (position = 0, element) {

    // 检查是否越界,注意这里包含了空链表时的情形
    if (position >= 0 && position <= length) {

      let node = new Node(element),
        current = head,
        previous,
        index = 0;

      if (position === 0) {
        node.next = current;
        head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current; // 即新元素插入到目标位置的前面，这里current可能是null
        previous.next = node;
      }

      length++;

      return true;
    } else {
      return false;
    }
  };

  /**
   * 把 LinkedList 对象转换成字符串
   *
   * @returns {string}
   */
  this.toString = function () {
    let current = head,
      string = '',
      index = 0;

    while (current) {
      string += index++ + ': ' + current.element + (current.next ? '\n' : '');
      current = current.next;
    }
    return string;
  };

  /**
   * 查找给定元素的索引,找不到则返回 -1
   *
   * @param element
   * @returns {number}
   */
  this.indexOf = function (element) {

    let current = head,
      index = -1;

    while (current) {
      index++;
      if (element === current.element) {
        return index;
      }
      current = current.next;
    }

    return -1;
  };

  /**
   * 移除给定位置的元素
   *
   * @param element
   * @returns {element|null}
   */
  this.remove = function (element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  };

  /**
   * 链表是否为空
   * @returns {boolean}
   */
  this.isEmpty = function () {
    return length === 0;
  };

  /**
   * 链表大小
   * @returns {number}
   */
  this.size = function () {
    return length;
  };

  /**
   * 获取表头
   * 方便实例外部访问和迭代链表
   *
   * @returns {element|null}
   */
  this.getHead = function () {
    return head;
  };
}
