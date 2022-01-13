import { transform, isEqual, isObject } from 'lodash';

// 比较两个对象差异
export function difference(object, base) {
  function changes(object, base) {
    return transform(object, function (result, value, key) {
      if (!isEqual(value, base[key])) {
        result[key] = (isObject(value) && isObject(base[key])) ? changes(value, base[key]) : value;
      }
    });
  }
  return changes(object, base);
}

export const storage = {
  set(key, value) {
    if (typeof value === 'object' && value !== null) {
      localStorage.setItem(key, JSON.stringify(value));
      return;
    }
    localStorage.setItem(key, value);
  },
  get(key) {
    const value = localStorage.getItem(key) || '';
    let val = null;
    try {
      val = JSON.parse(value);
    } catch (e) {
      return value;
    }

    if (typeof val === 'number') {
      return value;
    }
    return val;
  },
  del(key) {
    localStorage.removeItem(key);
  }
}

export const storages = {
  set(key, value) {
    if (typeof value === 'object' && value !== null) {
      sessionStorage.setItem(key, JSON.stringify(value));
      return;
    }
    sessionStorage.setItem(key, value);
  },
  get(key) {
    const value = sessionStorage.getItem(key) || '';
    let val = null;
    try {
      val = JSON.parse(value);
    } catch (e) {
      return value;
    }

    if (typeof val === 'number') {
      return value;
    }
    return val;
  },
  del(key) {
    sessionStorage.removeItem(key);
  }
}

export const formatNumber = n => {
  n = n.toString();
  return n[1] ? n : '0' + n;
}

export const formatTime = (time, type = false) => {
  const date = new Date(time);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  const ymd = [year, month, day].map(formatNumber).join('-');
  const hms = [hour, minute, second].map(formatNumber).join(':');
  return type ? ymd + ' ' + hms : ymd;
}

export function formatSeconds(value) {
  let result = parseInt(value);
  let h = Math.floor(result / 3600);
  let m = Math.floor((result / 60 % 60));
  let s = Math.floor((result % 60));

  result = `${h ? h + '时' : ''}${m ? m + '分' : ''}${s}秒`;

  return result
}


// 滚动指定dom位置
export function scrollToView(dom = '') {
  const el = document.querySelector(dom);
  const scroll = el.offsetTop;
  scroll ? window.scroll(0, scroll) : el.scrollIntoView();
}

// 数组对象去重
export function distinct(arr, key) {
  var newobj = {}, newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    if (!newobj[item[key]]) {
      newobj[item[key]] = newArr.push(item);
    }
  }
  return newArr;
}


// 自动挂载组件
export function autoload(Vue) {
  const files = require.context('@components', false, /\.vue$/);

  files.keys().forEach(path => {
    const instance = files(path).default;
    const name = path.split(".")[1].slice(1);
    Vue.component(name, instance);
  });
}

/* 
  将后台返回的菜单列表数据map成新的路由
  @arr1     后端返回的菜单路由
  @arr2     前端动态路由
  @return   新的路由列表
*/
export function overlapRouter(arr1 = [], arr2 = []) {
  let arr = [];

  arr1.forEach(({ url, children }) => {
    let item = {};

    // 方法1 两次循环
    arr2.forEach(ele => {
      if (url === ele.path) {
        item.path = ele.path;
        item.component = ele.component;
        item.name = ele.name;
        item.meta = ele.meta;
      }
      if (children && children.length && ele.children && ele.children.length) {
        item.children = overlapRouter(children, ele.children);
      }
    })

    // 方法2 循环 + find方法
    // const item2 = arr2.find(ele => ele.path === url);

    // if (item2) {
    //   item.path = item2.path;
    //   item.component = item2.component;
    //   item.meta = item2.meta;
    // }

    // if (children && children.length && item2.children && item2.children.length) {
    //   item.children = overlapRouter(children, item2.children);
    // }

    arr.push(item);
  })

  return arr;
}


// 校验相关
// 邮箱验证
export function checkEmail(str) {
  const reg = /[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+/g;
  return reg.test(str);
}

// 校验手机
export function checkPhone(str) {
  const reg = /^1[3456789]\d{9}$/g;
  return reg.test(str);
}

// 删除字符串空格
export function removeSpace(str) {
  return str.replace(/\s+/g, '');
}

// 密码校验
export function checkPass(str) {
  const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{5,20}$/;
  return reg.test(str);
}

// 密码校验
export function checkUsername(str) {
  const reg = /[a-zA-Z_0-9]{2,30}/;
  return reg.test(str);
}

// 手机号隐藏中间数字
export function dealPhone(str = '') {
  return str.slice(0, 3) + '****' + str.slice(7);
}



