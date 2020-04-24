/**
 * 数组列表
 */
const ArrayList = (function () {
  // 类内部私有变量
  const arrays = new WeakMap();
  // 类内部私有方法
  const swap = (a, i1, i2) => {
    let aux = a[i1];
    a[i1] = a[i2];
    a[i2] = aux;
  };

  return class {
    constructor (props) {
      arrays.set(this, []);
    }

    insert (item) {
      arrays.get(this).push(item);
    }

    toString () {
      return arrays.get(this).join();
    }

    bubbleSort () {
      const a = arrays.get(this);
      while (true) {
        let count = 0;
        for (let i = 0; i < a.length - 1; i++) {
          if (a[i] > a[i + 1]) {
            swap(a, i, i + 1);
            count++;
          }
        }
        if (count === 0) {
          break;
        }
      }
    }
  };
})();

module.exports = ArrayList;
