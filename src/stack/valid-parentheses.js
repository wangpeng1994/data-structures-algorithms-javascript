// 平衡圆括号的问题
// https://leetcode.com/problems/valid-parentheses/

// const Stack = (function() {
//     const items = new WeakMap();
//     return class {
//       constructor() {
//           items.set(this, []);
//       }
//       push(e) {
//           const s = items.get(this);
//           s.push(e);
//       }
//       pop() {
//           const s = items.get(this);
//           return s.pop();
//       }
//       isEmpty() {
//           const s = items.get(this);
//           return s.length === 0;
//       }
//     };
// })();

// function Stack() {
//     const items = [];
//     this.push = (e) => items.push(e);
//     this.pop = () => items.pop();
//     this.isEmpty = () => items.length === 0;
// }

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length === 0) return true;

  const stack = [];
  // 遇见左括号就入栈，右括号就弹出栈顶进行匹配
  // 平衡多少对儿，就弹出多少个左括号
  // 若能全部平衡，则最后栈应为空
  const dict = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  const isLeft = (c) => '({['.includes(c);

  if (!isLeft(s[0])) return false;

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (isLeft(c)) {
      stack.push(c);
    } else {
      if (dict[c] !== stack.pop()) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
