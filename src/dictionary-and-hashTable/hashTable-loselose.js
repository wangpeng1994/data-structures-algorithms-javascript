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
   * @param {string} key
   * @returns {number}
   */
  var loseloseHashCode = function (key) {
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i); // 将键值中的每个字母的ASCII值相加
    }
    return hash % 37; // 为了得到较小的值，和一个数取余，最后数组的存储范围是 0~36
  };

  this.put = function (key, value) {
    var position = loseloseHashCode(key);
    console.log(position + ' - ' + key);
    table[position] = value;
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
