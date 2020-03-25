const Stack = (function() {
  const items = new WeakMap();

  class Stack {
    constructor() {
      items.set(this, []);
    }

    push(element) {
      const s = items.get(this);
      s.push(element);
    }

    pop() {
      const s = items.get(this);
      return s.pop();
    }

    peek() {
      const s = items.get(this);
      return s[s.length - 1];
    }

    isEmpty() {
      const s = items.get(this);
      return s.length === 0;
    }

    size() {
      const s = items.get(this);
      return s.length;
    }

    clear() {
      items.set(this, []);
    }

    print() {
      const s = items.get(this);
      console.log(s.toString());
    }
  }

  return Stack;
})();
