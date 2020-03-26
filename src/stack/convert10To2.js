const Stack = require('./stack-weakMap');

/**
 * 十进制数字和2整除，直至结果是0，然后反向输出余数，得到转换后的二进制
 */
function convert10To2(decNumber) {
  let remStack = new Stack(),
    rem,
    binaryString = '';

  while (decNumber > 0) {
    rem = decNumber % 2;
    remStack.push(rem);
    decNumber = Math.floor(decNumber / 2);
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }

  return binaryString;
}

const test = 15;
const result = convert10To2(test);
console.log(result);
console.log('测试转换结果是否正确：', result === test.toString(2));

/**
 * 任意进制转十进制(十六进制及以内）
 */
function baseConverter(decNumber, base) {
  let remStack = new Stack(),
    rem,
    baseString = '',
    digits = '0123456789ABCDEF';

  while (decNumber > 0) {
    rem = decNumber % base;
    remStack.push(rem);
    decNumber = Math.floor(decNumber / base);
  }

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()];
  }

  return baseString;
}

const test2 = 2501234;
const result2 = baseConverter(test2, 16);
console.log(result2);
console.log('测试转换结果是否正确：', result2 === test2.toString(16).toUpperCase());
