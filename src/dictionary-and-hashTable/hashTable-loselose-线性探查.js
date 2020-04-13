/**
 * 散列表，基于 lose lose 哈希算法
 * 键需要是字符串，值可以是任意类型
 * @constructor
 */

function HashTable() {
  var table = [];

  /**
   * 散列函数 lose lose
   *
   * @param key
   * @returns {number}
   */
  var loseloseHashCode = function (key) {
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  };

  // 键值对副助类
  var ValuePair = function (key, value) {
    this.key = key;
    this.value = value;

    this.toString = function () {
      return '[' + this.key + ' - ' + this.value + ']';
    };
  };

  this.put = function (key, value) {
    var position = loseloseHashCode(key);
    console.log(position + ' - ' + key);

    var pair = new ValuePair(key, value);

    // 当目标位置被占用时尝试position++的位置
    if (table[position] === undefined) {
      table[position] = pair;
    } else {
      var index = ++position;
      while (table[index] !== undefined) {
        index++;
      }
      table[index] = pair;

    }
  };

  this.get = function (key) {
    return table[loseloseHashCode(key)];
  };

  this.remove = function (key) {
    table[loseloseHashCode(key)] = undefined;
  };

  // 纯粹为了验证table
  this.getTable = function () {
    return table;
  };
}
