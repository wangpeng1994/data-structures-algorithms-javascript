const readline = require('readline');

/**
 * 栈
 * @constructor
 */
function Stack() {
  let items = [];

  this.push = function (element) {
    items.push(element);
  };

  this.pop = function () {
    return items.pop();
  };

  this.peek = function () {
    return items[items.length - 1];
  };

  this.isEmpty = function () {
    return items.length === 0;
  };

  this.size = function () {
    return items.length;
  };

  this.clear = function () {
    items = [];
  };

  this.print = function () {
    console.log(items.toString());
  };
}

/**
 * 玩玩看
 */
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function loop() {
  rl.question('请选择操作：push/pop/peek/isEmpty/size/clear/print/exit\n', (answer) => {
    switch (answer) {
      case 'push':
        rl.question('请输入要push的元素:\n', (answer) => {
          stack.push(answer);
          loop();
        });
        break;
      case 'pop':
        console.log(stack.pop());
        loop();
        break;
      case 'peek':
        console.log(stack.peek());
        loop();
        break;
      case 'isEmpty':
        console.log(stack.isEmpty());
        loop();
        break;
      case 'size':
        console.log(stack.size());
        loop();
        break;
      case 'clear':
        stack.clear();
        loop();
        break;
      case 'print':
        console.log(stack.print());
        loop();
        break;
      case 'exit':
        rl.close();
        console.log('已关闭');
        return;
      default:
        console.log('无法理解！');
        loop();
    }
  });
}

const stack = new Stack();
loop();