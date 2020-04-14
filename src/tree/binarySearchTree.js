function BinarySearchTree() {

  var Node = function (key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };

  var root = null;

  /**
   * 辅助节点的插入
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

  this.insert = function (key) {
    var newNode = new Node(key);

    if (root === null) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  };

  var inOrderTraverseNode = function (node, callback) {
    if (node !== null) {

    }
  };

  this.inOrderTraverse = function (callback) {

  };
}