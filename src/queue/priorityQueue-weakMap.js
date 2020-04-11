/**
 * 优先队列
 * @type {Queue}
 */
const PriorityQueue = (function () {
  const items = new WeakMap();

  /**
   * 队列元素能包含优先级信息
   */
  class QueueElement {
    constructor(element, priority) {
      this.element = element;
      this.priority = priority;
    }
  }

  class Queue {
    constructor() {
      items.set(this, []);
    }

    // 最小优先队列（queueElement.priority < q[i].priority）
    enqueue(element, priority = 0) {
      if (element === undefined) {
        throw new Error('参数非法');
      }
      const q = items.get(this);
      const queueElement = new QueueElement(element, priority);
      let added = false;
      for (let i = 0; i < q.length; i++) {
        if (queueElement.priority < q[i].priority) {
          q.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }
      if (!added) {
        q.push(queueElement);
      }
    }

    // 最大优先队列（queueElement.priority > q[i].priority）
    enqueue2(element, priority = 0) {
      if (element === undefined) {
        throw new Error('参数非法');
      }
      const q = items.get(this);
      const queueElement = new QueueElement(element, priority);
      let added = false;
      for (let i = 0; i < q.length; i++) {
        if (queueElement.priority > q[i].priority) {
          q.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }
      if (!added) {
        q.push(queueElement);
      }
    }

    dequeue() {
      const q = items.get(this);
      return q.shift();
    }

    front() {
      const q = items.get(this);
      return q[0];
    }

    isEmpty() {
      const q = items.get(this);
      return q.length === 0;
    }

    size() {
      const q = items.get(this);
      return q.length;
    }

    print() {
      const q = items.get(this);
      q.forEach(item => {
        console.log(`${item.element} - ${item.priority}`);
      });
    }
  }

  return Queue;
})();
