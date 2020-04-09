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
}
