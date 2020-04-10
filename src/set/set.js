/**
 * 集合常用方法：
 * add(value) 添加新的项
 * delete(value) 移除元素
 * has(value) 判断集合中是否存在给定元素
 * clear() 移除集合中所有项
 * size() 返回集合所包含的元素数量
 * values() 返回一个包含集合中所有元素的数组
 */

function Set () {
  let items = {};

  /**
   * 判断集合中是否存在给定元素
   *
   * @param value
   * @returns {boolean}
   */
  this.has = function (value) {
    return items.hasOwnProperty(value);
  };

  /**
   * 添加新的项
   *
   * @param value
   * @returns {boolean}
   */
  this.add = function (value) {
    if (!this.has(value)) {
      items[value] = value;
      return true;
    }
    return false;
  };

  /**
   * 移除元素
   *
   * @param value
   * @returns {boolean}
   */
  this.delete = function (value) {
    if (this.has(value)) {
      delete items[value];
      return true;
    }
    return false;
  };

  /**
   * 移除集合中所有项
   */
  this.clear = function () {
    items = {};
  };

  /**
   * 返回集合所包含的元素数量
   *
   * @returns {number}
   */
  this.size = function () {
    return Object.keys(items).length;
  };

  /**
   * 返回一个包含集合中所有元素的数组
   *
   * @returns {[]}
   */
  this.values = function () {
    return Object.keys(items).map(key => items[key]);
  };

  /**
   * 求并集 A∪B
   *
   * @param otherSet
   */
  this.union = function (otherSet) {
    let unionSet = new Set();

    let values = this.values();
    values.forEach(value => unionSet.add(value));

    values = otherSet.values();
    values.forEach(value => unionSet.add(value));

    return unionSet;
  };

  /**
   * 求交集 A∩B
   *
   * @param otherSet
   * @returns {Set}
   */
  this.intersection = function (otherSet) {
    let intersectionSet = new Set();

    let values = this.values();
    values.forEach(value => {
      if (otherSet.has(value)) {
        intersectionSet.add(value);
      }
    });

    return intersectionSet;
  };

  /**
   * 求差集 A-B
   *
   * @param otherSet
   * @returns {Set}
   */
  this.difference = function (otherSet) {
    let differenceSet = new Set();

    let values = this.values();
    values.forEach(value => {
      if (!otherSet.has(value)) {
        differenceSet.add(value);
      }
    });

    return differenceSet;
  };

  /**
   * 判断A是否是B的子集
   *
   * @param otherSet
   * @returns {boolean}
   */
  this.subset = function (otherSet) {

    if (this.size() > otherSet.size()) {
      return false;
    } else {
      let values = this.values();
      for (let i = 0; i < values.length; i++) {
        if (!otherSet.has(values[i])) {
          return false;
        }
      }
      return true;
    }
  };

}
