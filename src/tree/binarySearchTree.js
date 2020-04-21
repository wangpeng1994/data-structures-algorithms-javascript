function BinarySearchTree() {

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
   * 最小值辅助函数, 可以从任意节点开始查找
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
   * 最大值辅助函数，可以从任意节点开始查找
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

  /**
   * 寻找最小节点的辅助函数
   *
   * @param node
   * @returns {*}
   */
  var findMinNode = function (node) {
    while (node && node.left) {
      node = node.left;
    }
    return node;
  };

  /**
   * 移除指定节点的辅助函数
   *
   * @param node
   * @param key
   * @returns {null|*} 总是返回处理后的节点
   */
  var removeNode = function (node, key) {

    // 键不存在于树中
    if (node === null) {
      return null;
    }
    // 在树中找到要移除的节点，小于当前节点向左找，大于当前节点向右找
    // 并更新节点左右指针的值
    if (key < node.key) {
      node.left = removeNode(node.left, key);
      return node;

    } else if (key > node.key) {
      node.right = removeNode(node.right, key);
      return node;

    } else { // 找到键值符合的节点，准备分情况移除节点，移花接木

      // 移除的是叶子节点（没有左右子节点）
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      // 只有一个或左或右子节点的节点
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      // 最后一种情况是有两个子节点的节点
      var aux = findMinNode(node.right); // 找到目标节点右子树种最小的节点
      node.key = aux.key; // 用其值更新打算"删除"的节点的值，虽然实际还是刚才的节点，但逻辑上当做被删除了
      node.right = removeNode(node.right, aux.key); // 右子树最小的节点已经被"挪动"用于填补"删除"的空缺，所以现在再把这个最小的节点删除
      return node;
    }
  };

  /**
   * 根据指定键移除节点
   *
   * @param key
   */
  this.remove = function (key) {
    root = removeNode(root, key);
  };
}
