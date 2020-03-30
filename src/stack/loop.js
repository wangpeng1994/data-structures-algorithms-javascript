/**
 *  目前只有最后的节点有 num，请为所有的节点补充 num（子节点 num 之和）
 */

var data = {
  label: 'zero级',
  children: [
    {
      label: '一级 1',
      children: [
        {
          label: '二级 1-1',
          children: [
            {
              label: '三级 1-1-1',
              num: 1
            },
            {
              label: '三级 1-1-2',
              num: 3
            }
          ]
        }
      ]
    },
    {
      label: '一级 2',
      children: [
        {
          label: '二级 2-1',
          children: [
            {
              label: '三级 2-1-1',
              num: 1
            }
          ]
        },
        {
          label: '二级 2-2',
          children: [
            {
              label: '三级 2-2-1',
              num: 14
            }
          ]
        }
      ]
    },
    {
      label: '一级 3',
      children: [
        {
          label: '二级 3-1',
          children: [
            {
              label: '三级 3-1-1',
              num: 10
            }
          ]
        },
        {
          label: '二级 3-2',
          children: [
            {
              label: '三级 3-2-1',
              num: 6
            }
          ]
        }
      ]
    }
  ]
};

/**
 * 使用递归实现
 * @param {object} data
 * @returns {number}
 */
function loop(data) {
  var children = data.children;
  if (Array.isArray(children) && children.length) {
    data.num = 0;
    children.forEach(child => {
      data.num += loop(child);
    });
    console.log('data.num', data.num)
    return data.num;
  } else {
    let v = typeof data.num === 'number' ? data.num : 0;
    console.log(v);
    return v;
  }
}

loop(data);
console.log(data);
