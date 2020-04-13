/**
 * 解决hash冲突: 线性探查法
 *
 * 以下纯粹来自书中实现，但其实有不少问题，不推荐！
 *
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

  // 键值对辅助类
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
    var position = loseloseHashCode(key);

    if (table[position] !== undefined) {
      if (table[position].key === key) {
        return table[position].value;
      } else {
        var index = ++position;
        while (
          table[index] === undefined ||
          table[index].key !== key
          ) {
          index++;
        }
        if (table[index].key === key) {
          return table[index].value;
        }
      }
    }
    return undefined;
  };

  this.remove = function (key) {
    var position = loseloseHashCode(key);

    if (table[position] !== undefined) {
      if (table[position].key === key) {
        table[position] = undefined;
      } else {
        var index = ++position;
        while (
          table[index] === undefined ||
          table[index].key !== key
          ) {
          index++;
        }
        if (table[index].key === key) {
          table[index] = undefined;
        }
      }
    }
  };

  // 纯粹为了验证table
  this.getTable = function () {
    return table;
  };
}
