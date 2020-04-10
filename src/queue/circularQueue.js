const Queue = require('./queue-weakMap');

/**
 * 利用循环队列实现击鼓传花（烫手山芋）
 * 由于 JS 语言的灵活性，数组长度可以动态变化，这里的循环是指纯粹的元素滚动
 * 而像 Java 语言中的循环（环形）队列，指的是：
 * 通过数组和指针结合取余%运算，把存储队列元素的表从逻辑上看成一个环，称为循环队列，
 * 从而实现用固定长度的数组模拟队列时，可以循环利用数组的空间
 *
 * @param nameList 名字列表
 * @param num 循环次数
 * @returns {*} 获胜者
 */
function hotPotato (nameList = [], num) {
  const queue = new Queue();

  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]);
  }

  let eliminated = '';

  // 最终只留一位获胜者
  while (queue.size() > 1) {
    // 没循环滚动 num 次后，淘汰一名
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue()); // 循环队列关键之处
    }
    eliminated = queue.dequeue();
    console.log(eliminated + '在游戏中被淘汰！');
  }

  return queue.dequeue(); // 返回获胜者
}

const nameList = ['a', 'b', 'c', 'd', 'e'];
const winner = hotPotato(nameList, 5);
console.log('获胜者是：', winner);
