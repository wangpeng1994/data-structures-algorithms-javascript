/**
 * 解决hash冲突: 分离链接法
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
          if (table[position].isEmpty()) {
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
