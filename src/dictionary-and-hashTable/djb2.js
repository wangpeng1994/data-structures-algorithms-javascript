// lose lose 散列函数过于简单、冲突太多，极端情况下退化为链表，失去了散列数组快速访问元素的意义

// 一个良好的散列函数既要计算的快，又要冲突少。djb2 是目前最受社区推崇的散列函数之一

/**
 * djb2 散列算法
 *
 * @param {string} key
 * @returns {number}
 */
function djb2HashCode(key) {
  var hash = 5381; // 大多数实现都使用 5381
  for (var i = 0; i < key.length; i++) {
    hash = hash * 33 + hash.charCodeAt(i);
  }
  return hash % 1013; // 控制下最终哈希值大小，假设散列表大小为1000
}
