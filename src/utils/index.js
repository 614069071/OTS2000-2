import { transform, isEqual, isObject, cloneDeep } from "lodash";
import { i18nToKey } from "@/locale";

// 比较两个对象差异
export function difference(object, base) {
  function changes(object, base) {
    return transform(object, function(result, value, key) {
      if (key === "channel") {
        return (result[key] = value);
      }

      if (!isEqual(value, base[key])) {
        result[key] = isObject(value) && isObject(base[key]) ? changes(value, base[key]) : value;
      }
    });
  }
  return changes(object, base);
}

export function makeMap(arr) {
  const obj = {};

  arr.forEach(e => (obj[e] = true));

  return k => !!obj[k];
}

const similar = ["m16", "d16", "md8", "m40", "d40", "md16sfa", "md16sfb", "dcm"];

const noBoardTypes = ["m16", "d16", "md8", "m40", "d40", "md16sfa", "md16sfa"];

export const isNoBoardType = makeMap(noBoardTypes);

export const isSimilar = makeMap(similar);

export const clone = cloneDeep;

export const storage = {
  set(key, value) {
    if (typeof value === "object" && value !== null) {
      localStorage.setItem(key, JSON.stringify(value));
      return;
    }
    localStorage.setItem(key, value);
  },
  get(key) {
    const value = localStorage.getItem(key) || "";
    let val = null;
    try {
      val = JSON.parse(value);
    } catch (e) {
      return value;
    }

    if (typeof val === "number") {
      return value;
    }
    return val;
  },
  del(key) {
    localStorage.removeItem(key);
  },
};

export const storages = {
  set(key, value) {
    if (typeof value === "object" && value !== null) {
      sessionStorage.setItem(key, JSON.stringify(value));
      return;
    }
    sessionStorage.setItem(key, value);
  },
  get(key) {
    const value = sessionStorage.getItem(key) || "";
    let val = null;
    try {
      val = JSON.parse(value);
    } catch (e) {
      return value;
    }

    if (typeof val === "number") {
      return value;
    }
    return val;
  },
  del(key) {
    sessionStorage.removeItem(key);
  },
};

export const formatNumber = n => {
  n = n.toString();
  return n[1] ? n : "0" + n;
};

export const formatTime = time => {
  const date = new Date(time);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const ymd = [year, month, day].map(formatNumber).join("-");
  const hms = [hour, minute, second].map(formatNumber).join(":");

  return ymd + " " + hms;
};

export function formatSeconds(value) {
  let result = parseInt(value);
  let h = Math.floor(result / 3600);
  let m = Math.floor((result / 60) % 60);
  let s = Math.floor(result % 60);

  result = `${h ? h + "时" : ""}${m ? m + "分" : ""}${s}秒`;

  return result;
}

// 自动挂载组件
export function autoload(Vue) {
  const files = require.context("@components", false, /\.vue$/);

  files.keys().forEach(path => {
    const instance = files(path).default;
    const name = path.split(".")[1].slice(1);
    Vue.component(name, instance);
  });
}

/*
// 滚动指定dom位置
export function scrollToView(dom = "") {
  const el = document.querySelector(dom);
  const scroll = el.offsetTop;
  scroll ? window.scroll(0, scroll) : el.scrollIntoView();
}

// 将后台返回的菜单列表数据map成新的路由
// @arr1     后端返回的菜单路由
// @arr2     前端动态路由
// @return   新的路由列表
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
    });

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
  });

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
  return str.replace(/\s+/g, "");
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
export function dealPhone(str = "") {
  return str.slice(0, 3) + "****" + str.slice(7);
} */

export const alarmLevels = [i18nToKey("COMMON.HINT"), i18nToKey("COMMON.MINOR"), i18nToKey("COMMON.MAIN"), i18nToKey("COMMON.SEVERITY")];

export const alarmTypes = {
  1: "链路Link Down",
  2: "LOS", //光线路LOS
  3: "LOL", //光线路LOL
  4: "光线路光功率低",
  5: "模块不在位",
  6: "光模块温度高警告",
  7: "光模块温度低警告",
  8: "光模块电压高警告",
  9: "光模块电压低警告",
  10: "光模块电流高警告",
  11: "光模块电流低警告",
  12: "光模块发送光功率高警告",
  13: "光模块发送光功率低警告",
  14: "光模块接收光功率高警告",
  15: "光模块接收光功率低警告",
  16: "光模块温度高告警",
  17: "光模块温度低告警",
  18: "光模块电压高告警",
  19: "光模块电压低告警",
  20: "光模块电流高告警",
  21: "光模块电流低告警",
  22: "光模块发送光功率高告警",
  23: "光模块发送光功率低告警",
  24: "光模块接收光功率高告警",
  25: "光模块接收光功率低告警",
  26: "Pump电流高告警",
  27: "Pump温度过高告警",
  28: "Pump温度过低告警",
  29: "EDFA模块温度过高告警",
  30: "EDFA模块温度过低告警",
  31: "输入光功率低告警",
  32: "输出光功率低告警",
  33: "主线路光功率低告警",
  34: "备线路光功率低告警",
  35: "本地线路发光功率低告警",
  36: "系统温度高告警",
  37: "系统温度低告警",
  38: "系统电压高告警", //1 直流 2 交流
  39: "系统电压低告警", //1 直流 2 交流
  40: "风扇板警告",
  41: "激光器温度高警告",
  42: "激光器温度低警告",
  43: "激光器温度高告警",
  44: "激光器温度高告警",
  45: "LOS", //CPF2_LOS
  46: "LOL", //CPF2_LOL
};

export const mapAlarmTypes = {
  // boardtype       确定板类型
  // alarmid         确定告警类型
  // portno + value  确定告警名称

  1: {
    name: "Mx合波板",
  },
  2: {
    name: "Dx分波板",
  },
  3: {
    name: "4*10G OTU板",
    light: [null, "C1", "L1", "C2", "L2", "C3", "L3", "C4", "L4"],
  },
  4: {
    name: "2*10G OCP板",
    light: [null, "C1", "1L2", "1L1", "C2", "2L2", "2L1"],
  },
  5: {
    name: "4*25G OTU板",
    light: [null, "C1", "C2", "C3", "C4", "L1", "L2", "L3", "L4"],
  },
  6: {
    name: "40G&100G MUX板",
    light: [],
  },
  7: {
    name: "200G CFP2 DCO板",
    lols: [null, "CCH1", "CCH2", "CCH3", "CCH4", "CCH5", "CCH6", "CCH7", "CCH8", "CFP2"],
    model: [null, "QSFP28-1模块CH1", "QSFP28-1模块CH2", "QSFP28-1模块CH3", "QSFP28-1模块CH4", "QSFP28-2模块CH1", "QSFP28-2模块CH2", "QSFP28-2模块CH3", "QSFP28-2模块CH4", "CFP2"],
    other: { 1: "QSFP28-1", 5: "QSFP28-2", 9: "CFP2" },
    cfp2: [null, "LCH1", "LCH2", "LCH3", "LCH4", "LCH5", "LCH6", "LCH7", "LCH8", "LCH"],
  },
  8: {
    name: "EDFA板",
    light: [null, "T1", "T2", "T3"],
  },
  9: {
    name: "NMU板",
    light: [null, "SFP1", "SFP2", "SFP3"],
    38: [null, "直流", "交流"],
    39: [null, "直流", "交流"],
  },
  10: {
    name: "OLP板",
    light: [null, "主线路", "备线路", "本地线路"],
  },
  11: {
    name: "DCM板",
    light: [null, "T1", "T2", "T3"],
  },
};

export function mapBoardAlarmName(boardType, alarmId, port) {
  // const elect = { 1: "直流", 2: "交流" };//alarmId 38 39
  /* 
    (40G&100G MUX板)  (200G CFP2 OTU相干板) NMU板 模块尚未定义
  */
  // 40G&100G MUX板
  if (boardType == 6) {
    if (alarmId == 5) {
      // 模块不在位时处理
    }
    return;
  }

  // 200G CFP2 OTU相干板
  if (boardType == 7) {
    // lol los
    if ([2, 3].includes(alarmId)) {
      return (mapAlarmTypes[7]["lols"][port] || "") + " " + alarmTypes[alarmId];
    }

    // 电流 发射功率 接受功率
    if ([10, 11, 20, 21, 26, 12, 13, 22, 23, 14, 15, 24, 25].includes(alarmId)) {
      return (mapAlarmTypes[7]["model"][port] || "") + " " + alarmTypes[alarmId];
    }

    // cfp2 模块
    if ([45, 46].includes(alarmId)) {
      return (mapAlarmTypes[7]["cfp2"][port] || "") + " " + alarmTypes[alarmId];
    }

    return (mapAlarmTypes[7]["other"][port] || "") + " " + alarmTypes[alarmId];
  }

  // NMU板
  if (boardType == 9) {
    //光线路LOS
    if ([2, 5].includes(alarmId)) return (mapAlarmTypes[9]["light"][port] || "") + " " + alarmTypes[alarmId];

    //系统电压告警
    if ([36, 37, 38, 39].includes(alarmId)) return alarmTypes[alarmId];
  }

  const board = mapAlarmTypes[boardType];
  const model = port ? board.light[port] : "";
  const alarm = alarmTypes[alarmId];
  const result = model + " " + alarm;

  return result;
}

export function perToMenus(role, items) {
  const result = items.filter(menu => {
    const f = menu.meta && menu.meta.role && menu.meta.role.includes(role);

    menu.children = f && menu.children && menu.children.length ? perToMenus(role, menu.children) : [];

    return f;
  });

  return result;
}
