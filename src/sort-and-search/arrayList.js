// 排序算法可视化：https://visualgo.net/bn/sorting

/**
 * 数组列表
 */
const ArrayList = (function () {
  // 类内部私有变量
  const array = new WeakMap();
  // 类内部私有方法
  const swap = (a, i1, i2) => {
    // let aux = a[i1];
    // a[i1] = a[i2];
    // a[i2] = aux;
    [a[i1], a[i2]] = [a[i2], a[i1]]; // ES6
  };

  return class {
    constructor(props) {
      array.set(this, []);
    }

    insert(item) {
      array.get(this).push(item);
    }

    toString() {
      return array.get(this).join();
    }

    /**
     * 冒泡排序 O(n^2)
     */
    bubbleSort() {
      const a = array.get(this);
      for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - 1; j++) {
          if (a[j] > a[j + 1]) {
            swap(a, j, j + 1);
          }
        }
      }
    }

    /**
     * 改进后的冒泡排序 O(n^2)
     */
    bubbleSortPro() {
      const a = array.get(this);
      for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - 1 - i; j++) {
          if (a[j] > a[j + 1]) {
            swap(a, j, j + 1);
          }
        }
      }
    }

    /**
     * 选择排序 O(n^2)
     */
    selectionSort() {
      const a = array.get(this);
      let length = a.length, indexMin;
      for (let i = 0; i < length - 1; i++) { // 重复 元素个数-1 次
        indexMin = i; // 把第一个没有排序过的元素设置为最小值
        for (let j = i; j < length; j++) { // 遍历每个没有排序过的元素
          if (a[indexMin] > a[j]) {
            indexMin = j; // 找到真正的最小值
          }
        }
        if (i !== indexMin) {
          swap(a, i, indexMin); // 将第一个没有排序过的元素和最小值交换
        }
      }
    }

    /**
     * 插入排序 O(n^2)
     */
    insertionSort() {
      const a = array.get(this);
      let length = a.length, j, temp;
      for (let i = 1; i < length; i++) { // 假设第一项已排序
        j = i;
        temp = a[i]; // "提取"的元素
        while (j > 0 && a[j - 1] > temp) {
          a[j] = a[j - 1];
          j--;
        }
        a[j] = temp;
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
array.insertionSort();
console.log(array.toString());
