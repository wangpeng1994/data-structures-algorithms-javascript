/**
 * 解决hash冲突: 分离链接法
 *
 * 以下实现中是本人基于书中进行改良，推荐！
 * 当发生hash碰撞时，或者重复的key时，都会向表头添加键值对，
 * 即使key重复，当get时也能就近获取最近一次设置的value
 *
 * @constructor
 */
function HashTable() {
  var table = [];

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

    if (table[position] === undefined) {
      table[position] = new LinkedList();
    }
    table[position].insert(0, new ValuePair(key, value)); // 插入到表头
  };

  this.get = function (key) {
    var position = loseloseHashCode(key);

    if (table[position] !== undefined) {
      // 遍历链表寻找键值对
      var current = table[position].getHead();
      while (current) {
        if (current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      }
    }
    return undefined;
  };

  this.remove = function (key) {
    var position = loseloseHashCode(key);

    if (table[position] !== undefined) {
      var current = table[position].getHead();
      while (current) {
        if (current.element.key === key) {
          table[position].remove(current.element);
          if (table[position].isEmpty()) { // 不留下空链表
            table[position] = undefined;
          }
          return true;
        }
        current = current.next;
      }
    }
    return false;
  };

  // 纯粹为了验证table
  this.getTable = function () {
    return table;
  };
}
