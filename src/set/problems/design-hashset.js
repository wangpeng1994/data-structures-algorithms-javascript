// https://leetcode.com/problems/design-hashset/

// 不适用任何内建的哈希表库，设计一个 HashSet

// add(value): Insert a value into the HashSet.
// contains(value) : Return whether the value exists in the HashSet or not.
// remove(value): Remove a value in the HashSet. If the value does not exist in the HashSet, do nothing.

/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
  this.items = {};
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
  if (!this.contains(key)) {
    this.items[key] = key;
  }
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
  if (this.contains(key)) {
    delete this.items[key];
  }
};

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
  return this.items.hasOwnProperty(key);
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */