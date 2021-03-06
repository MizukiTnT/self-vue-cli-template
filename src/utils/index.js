/**
 * Created by niehangbin on 10/15/2018.
 */


 export function uuid() {
  let s = [];
  let hexDigits = "0123456789abcdef";
  for (var i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = "-";

  let uuid = s.join("");
  return uuid;
}



export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

export function formatTime(time, option) {
  time = +time * 1000
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}
// 这个deepClone并没有处理数组中的对象 建议使用场景是
export function deepClone(x) {

  const uniqueList = [];


  let root = {};

  const loopList = [
      {
          parent: root,
          key: undefined,
          data: x,
      }
  ];

  while(loopList.length) {

      const node = loopList.pop();
      const parent = node.parent;
      const key = node.key;
      const data = node.data;

      let res = parent;
      if (typeof key !== 'undefined') {
          res = parent[key] = {};
      }

      let uniqueData = find(uniqueList, data);
      if (uniqueData) {
          parent[key] = uniqueData.target;
          continue;
      }
      uniqueList.push({
          source: data,
          target: res,
      });
      // =============

      for(let k in data) {
          if (data.hasOwnProperty(k)) {
              if (typeof data[k] === 'object') {

                  loopList.push({
                      parent: res,
                      key: k,
                      data: data[k],
                  });
              } else {
                  res[k] = data[k];
              }
          }
      }
  }

  return root;
}

function find(arr, item) {
  for(let i = 0; i < arr.length; i++) {
      if (arr[i].source === item) {
          return arr[i];
      }
  }

  return null;
}

// 将/r/n转换成<br/>
export function transSpace(str) {
  return str.replace(/\r\n/g, '<br/>').replace(/\n/g, '<br/>').replace(/\s/g, ' ')
}

// 将<br/> 转换成/r/n
export function transBr(str) {
  return str.replace(/<br\/>/g, "\n")
}