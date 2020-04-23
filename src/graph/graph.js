const Dictionary = require('../dictionary-and-hashTable/dictionary');
const Queue = require('../queue/queue-weakMap');
const Stack = require('../stack/stack-weakMap');

function Graph () {

  var vertices = []; // 存储所有顶点
  var adjList = new Dictionary(); // 邻接表

  /**
   * 添加顶点
   *
   * @param v 顶点
   */
  this.addVertex = function (v) {
    vertices.push(v);
    adjList.set(v, []);
  };

  /**
   * 添加边（基于无向图）
   *
   * @param v 顶点
   * @param w 顶点
   */
  this.addEdge = function (v, w) {
    adjList.get(v).push(w);
    adjList.get(w).push(v);
  };

  this.addDiEdge = function (v, w) {
    adjList.get(v).push(w);
  };

  /**
   * 打印
   *
   * @returns {string}
   */
  this.toString = function () {
    var s = '';
    for (var i = 0; i < vertices.length; i++) { //{10}
      s += vertices[i] + ' -> ';
      var neighbors = adjList.get(vertices[i]); //{11}
      for (var j = 0; j < neighbors.length; j++) { //{12}
        s += neighbors[j] + ' ';
      }
      s += '\n'; //{13}
    }
    return s;
  };

  /**
   * 将所有顶点标记为白色
   */
  var initializeColor = function () {
    var color = {};
    for (var i = 0; i < vertices.length; i++) {
      color[vertices[i]] = 'white';
    }
    return color;
  };

  /**
   * Breath-First search (BFS) 广度优先搜索
   *
   * color 字典 value 含义如下：
   * while 未被访问过
   * grey  已被发现但尚未完成探索
   * black 已被探索
   *
   * @param {string} v 起始顶点
   * @param callback   可选的回调函数
   */
  this.bfs = function (v, callback) {

    var color = initializeColor();
    var queue = new Queue();
    queue.enqueue(v);

    while (!queue.isEmpty()) {
      var u = queue.dequeue();
      var neighbors = adjList.get(u);
      color[u] = 'grey'; // 虽然可能此前就已是 grey
      for (var i = 0; i < neighbors.length; i++) {
        var w = neighbors[i];
        if (color[w] === 'white') { // 只有 white 才入队列，否则曾经已经入过了
          color[w] = 'grey';
          queue.enqueue(w);
        }
      }
      // 标记为已探索，之后尝试调用回调函数
      color[u] = 'black';
      if (callback) {
        callback(u);
      }
    }
  };

  /**
   * 改进版 BFS，可求最短路径
   *
   * @param v 起始顶点
   * @returns {{distances: {}, predecessors: {}}} 返回距离和前溯点信息
   */
  this.BFS = function (v) {

    var color = initializeColor();
    var queue = new Queue();
    var d = {}, pred = {}; // d 记录每个顶点到源的距离（边数），pred 记录每个顶点的前溯点
    queue.enqueue(v);

    // 初始化距离和前溯点
    for (var i = 0; i < vertices.length; i++) {
      d[vertices[i]] = 0;
      pred[vertices[i]] = null;
    }

    while (!queue.isEmpty()) {
      var u = queue.dequeue();
      var neighbors = adjList.get(u);
      color[u] = 'grey';
      for (var i = 0; i < neighbors.length; i++) {
        var w = neighbors[i];
        if (color[w] === 'white') {
          color[w] = 'grey';
          queue.enqueue(w);
          d[w] = d[u] + 1; // 设置 vw 距离
          pred[w] = u; // 设置 w 前溯点
        }
      }
      color[u] = 'black';
    }

    return {
      distances: d,
      predecessors: pred
    };
  };

  /////////////////////////////////////////////////////////

  /**
   * Depth-first search (DFS) 深度优先搜索
   *
   * @param callback 回调函数
   */
  this.dfs = function (callback) {
    var color = initializeColor();
    // 图中每个未被访问过的顶点都调用递归函数
    for (var i = 0; i < vertices.length; i++) {
      if (color[vertices[i]] === 'white') {
        dfsVisit(vertices[i], color, callback);
      }
    }
  };

  /**
   * dfs 辅助访问器 (类似于二叉树的先序遍历)
   *
   * @param u        未被访问过的顶点
   * @param color    颜色映射
   * @param callback 回调函数
   */
  var dfsVisit = function (u, color, callback) {
    color[u] = 'grey';
    if (callback) {
      callback(u);
    }
    var neighbors = adjList.get(u);
    for (var i = 0; i < neighbors.length; i++) {
      var w = neighbors[i];
      if (color[w] === 'white') {
        dfsVisit(w, color, callback);
      }
    }
    color[u] = 'black';
  };

  /////////////////////////////////////////////////////////

  var time = 0;

  /**
   * 增强后的 DFS
   *
   * @returns {{predecessors: {}, discovery: {}, finished: {}}}
   * @constructor
   */
  this.DFS = function () {
    var color = initializeColor(),
      d = {},   // 发现时间
      f = {},   // 完成时间
      p = {},   // 前溯点
      time = 0; // 调用时重置时间

    for (var i = 0; i < vertices.length; i++) {
      f[vertices[i]] = 0;
      d[vertices[i]] = 0;
      p[vertices[i]] = null;
    }
    for (var i = 0; i < vertices.length; i++) {
      if (color[vertices[i]] === 'white') {
        DFSVisit(vertices[i], color, d, f, p);
      }
    }
    return {
      discovery: d,
      finished: f,
      predecessors: p
    };
  };

  var DFSVisit = function (u, color, d, f, p) {
    console.log('discovered ' + u);
    color[u] = 'grey';
    d[u] = ++time;
    var neighbors = adjList.get(u);
    for (var i = 0; i < neighbors.length; i++) {
      var w = neighbors[i];
      if (color[w] === 'white') {
        p[w] = u;
        DFSVisit(w, color, d, f, p);
      }
    }
    color[u] = 'black';
    f[u] = ++time;
    console.log('explored ' + u);
  };

}

/************************** 测试 ********************************/

// 测试基础 Graph 类
var graph = new Graph();
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (var i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

graph.bfs(myVertices[0], console.log);

// 演示 BFS 求最短路径(利用前溯点信息)
var shortestPathA = graph.BFS(myVertices[0]);
console.log(shortestPathA);
var fromVertex = myVertices[0];
for (var i = 1; i < myVertices.length; i++) {
  var toVertex = myVertices[i];
  var path = new Stack();
  for (var v = toVertex; v !== fromVertex; v = shortestPathA.predecessors[v]) {
    path.push(v);
  }
  path.push(fromVertex);
  var s = path.pop();
  while (!path.isEmpty()) {
    s += ' - ' + path.pop();
  }
  console.log(s);
}

// 测试 dfs
console.log('测试 dfs');
graph.dfs(console.log);

// 测试包含时间和前溯点的 DFS
console.log('测试包含时间和前溯点的 DFS');
console.log(graph.DFS());

// 演示使用 DFS 遍历 DAG(有向无环图) 得出拓扑排序
console.log('演示使用 DFS 遍历 DAG(有向无环图) 得出拓扑排序');
graph = new Graph();
myVertices = ['A', 'B', 'C', 'D', 'E', 'F'];
for (i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}
graph.addDiEdge('A', 'C');
graph.addDiEdge('A', 'D');
graph.addDiEdge('B', 'D');
graph.addDiEdge('B', 'E');
graph.addDiEdge('C', 'F');
graph.addDiEdge('F', 'E');
console.log(graph.DFS());
// 将完成时间按倒序排序得出拓扑的一种: B-A-D-C-F-E
// 其他的还有 A-B-C-D-F-E  A-C-F-B-E-D 等
