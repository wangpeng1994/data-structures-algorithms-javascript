const Queue = (function () {
  const items = new WeakMap();

  class Queue {
    constructor () {
      items.set(this, []);
    }

    enqueue (element) {
      const q = items.get(this);
      q.push(element);
    }

    dequeue () {
      const q = items.get(this);
      return q.shift();
    }

    front () {
      const q = items.get(this);
      return q[0];
    }

    isEmpty () {
      const q = items.get(this);
      return q.length === 0;
    }

    size () {
      const q = items.get(this);
      return q.length;
    }

    print () {
      const q = items.get(this);
      console.log(q.toString());
    }
  }

  return Queue;
})();
