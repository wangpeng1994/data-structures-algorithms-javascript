function BinarySearchTree() {

  var Node = function (key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };

  var root = null;

  /**
   * 节点插入辅助函数
   *
   * @param {Node} node 当前节点
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

  /**
   * 中序遍历辅助函数
   *
   * @param node
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

  /**
   * 先序遍历辅助函数
   *
   * @param node
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

  /**
   * 后序遍历辅助函数
   *
   * @param node
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
}