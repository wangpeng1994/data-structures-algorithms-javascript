// 排序算法可视化：https://visualgo.net/bn/sorting

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
    // [a[i1], a[i2]] = [a[i2], a[i1]] // ES6
  };

  return class {
    constructor(props) {
      arrays.set(this, []);
    }

    insert(item) {
      arrays.get(this).push(item);
    }

    toString() {
      return arrays.get(this).join();
    }

    /**
     * 冒泡排序
     */
    bubbleSort() {
      const a = arrays.get(this);
      for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - 1; j++) {
          if (a[j] > a[j + 1]) {
            swap(a, j, j + 1);
          }
        }
      }
    }

    /**
     * 改进后的冒泡排序
     */
    bubbleSortPro() {
      const a = arrays.get(this);
      for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - 1 - i; j++) {
          if (a[j] > a[j + 1]) {
            swap(a, j, j + 1);
          }
        }
      }
    }
  };
})();

module.exports = ArrayList;

function createNonSortedArray(size) {
  const array = new ArrayList();
  for (let i = size; i > 0; i--) {
    array.insert(i);
  }
  return array;
}

const array = createNonSortedArray(10);
console.log(array.toString());
array.bubbleSort();
console.log(array.toString());
