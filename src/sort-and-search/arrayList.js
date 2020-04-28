// 排序算法可视化：https://visualgo.net/bn/sorting

/**
 * 数组列表
 */
const ArrayList = (function () {
  // 类内部私有变量
  const arrays = new WeakMap();
  // 类内部私有方法
  const swap = (a, i1, i2) => {
    // let aux = a[i1];
    // a[i1] = a[i2];
    // a[i2] = aux;
    [a[i1], a[i2]] = [a[i2], a[i1]]; // ES6
  };

  const mergeSortRec = (a) => {
    const length = a.length;
    if (length === 1) {
      return a;
    }
    const mid = Math.floor(length / 2),
      left = a.slice(0, mid),
      right = a.slice(mid, length);
    return merge(mergeSortRec(left), mergeSortRec(right));
  };

  const merge = (left, right) => {
    let il = 0, ir = 0, result = [];
    while (il < left.length && ir < right.length) {
      if (left[il] <= right[ir]) {
        result.push(left[il++]);
      } else {
        result.push(right[ir++]);
      }
    }
    while (il < left.length) {
      result.push(left[il++]);
    }
    while (ir < right.length) {
      result.push(right[ir++]);
    }
    return result;
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
     * 冒泡排序 O(n^2)
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
     * 改进后的冒泡排序 O(n^2)
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

    /**
     * 选择排序 O(n^2)
     */
    selectionSort() {
      const a = arrays.get(this);
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
      const a = arrays.get(this);
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

    /**
     * 归并排序
     */
    mergeSort() {
      const array = mergeSortRec(arrays.get(this));
      arrays.set(this, array);
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

console.log(Date());
const array = createNonSortedArray(100000); // 10w条数据
console.log(array.toString());
// array.bubbleSort(); // 18.712066719
// array.bubbleSortPro(); // 15.460200022
// array.selectionSort(); // 5.793334085
// array.insertionSort(); // 5.17506965
array.mergeSort(); // 1.26896726
console.log(array.toString());

console.log(process.uptime());