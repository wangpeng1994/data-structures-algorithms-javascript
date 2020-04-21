function BinarySearchTree () {

  var Node = function (key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };

  var root = null;

  /////////////////////////////////////////////////////////

  /**
   * 节点插入辅助函数
   *
   * @param {Node} node 指针
   * @param {Node} newNode 待插入的节点
   */
  var insertNode = function (node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
      }
    }
  };

  /**
   * 插入新的键
   *
   * @param key
   */
  this.insert = function (key) {
    var newNode = new Node(key);

    if (root === null) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  };

  /////////////////////////////////////////////////////////

  /**
   * 中序遍历辅助函数
   *
   * @param node 指针
   * @param callback
   */
  var inOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      inOrderTraverseNode(node.left, callback);
      callback(node.key);
      inOrderTraverseNode(node.right, callback);
    }
  };

  /**
   * 中序遍历
   *
   * @param callback
   */
  this.inOrderTraverse = function (callback) {
    inOrderTraverseNode(root, callback);
  };

  /////////////////////////////////////////////////////////

  /**
   * 先序遍历辅助函数
   *
   * @param node 指针
   * @param callback
   */
  var preOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      callback(node.key);
      preOrderTraverseNode(node.left, callback);
      preOrderTraverseNode(node.right, callback);
    }
  };

  /**
   * 先序遍历
   *
   * @param callback
   */
  this.preOrderTraverse = function (callback) {
    preOrderTraverseNode(root, callback);
  };

  /////////////////////////////////////////////////////////

  /**
   * 后序遍历辅助函数
   *
   * @param node 指针
   * @param callback
   */
  var postOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      postOrderTraverseNode(node.left, callback);
      postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  };

  /**
   * 后序遍历
   *
   * @param callback
   */
  this.postOrderTraverse = function (callback) {
    postOrderTraverseNode(root, callback);
  };

  /////////////////////////////////////////////////////////

  /**
   * 最小值辅助函数
   * @param node 指针
   * @returns {null|*}
   */
  var minNode = function (node) {
    if (node) {
      while (node.left) {
        node = node.left;
      }
      return node.key;
    }
    return null;
  };

  /**
   * 搜索最小值
   *
   * @returns {null|*}
   */
  this.min = function () {
    return minNode(root);
  };

  /////////////////////////////////////////////////////////

  /**
   * 最大值辅助函数
   * @param node 指针
   * @returns {null|*}
   */
  var maxNode = function (node) {
    if (node) {
      while (node.right) {
        node = node.right;
      }
      return node.key;
    }
    return null;
  };

  /**
   * 搜索最大值
   *
   * @returns {null|*}
   */
  this.max = function () {
    return maxNode(root);
  };

  /////////////////////////////////////////////////////////

  /**
   * 搜索特定值辅助函数
   *
   * @param node 指针
   * @param key
   * @returns {boolean}
   */
  var searchNode = function (node, key) {

    if (node === null) {
      return false;
    }
    if (key < node.key) {
      return searchNode(node.left, key);

    } else if (key > node.key) {
      return searchNode(node.right, key);

    } else { // 等于，说明找到了
      return true;
    }
  };

  /**
   * 搜索特定值是否存在
   *
   * @param key
   * @returns {boolean}
   */
  this.search = function (key) {
    return searchNode(root, key);
  };

  /////////////////////////////////////////////////////////

  var removeNode = function (node, key) {

    // 键不存在于树中
    if (node === null) {
      return null;
    }
    // 在树中找到要移除的节点，小于当前节点key向左找，大于则向右找
    // 并更新节点左右指针的值
    if (key < node.key) {

    }
  };

  this.remove = function (key) {
    root = removeNode(root, key);
  };

}