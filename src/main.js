import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import i18n from "@/locale";
import fetch from "@/fetch";
import { formatSeconds, clone, difference, formatTime, mapAlarmTypes, alarmLevels, mapBoardAlarmName } from "@/utils";
import Structure from "@/components/structure";
import Pupur from "@/components/pupur";
import Limit from "@/components/limit";
import { storages, makeMap } from "@/utils";

import "@/element";
import "@/styles";

Vue.prototype.$bus = new Vue();
Vue.prototype.$http = fetch;
Vue.prototype.$clone = clone;
Vue.prototype.$difference = difference;

Vue.config.productionTip = false;

const CONTROL = "control"; //操作
const EDITOR = "editor"; //编辑
const DELETE = "delete"; //删除
const ADD = "add"; //新增
const rolePermissions = [[], [CONTROL], [CONTROL, EDITOR, DELETE, ADD]];

Vue.directive("permission", {
  bind(el, binding) {
    const { value } = binding;
    const role = storages.get("__role__") || "0";
    const permissions = rolePermissions[role];
    const makePermissions = makeMap(permissions);
    const has = makePermissions(value);
    setTimeout(() => {
      if (has) return;

      const parent = el.parentElement || el.parentNode;
      parent.removeChild(el);
    });
  },
});

Vue.component("structure", Structure);
Vue.component("Limit", Limit);
Vue.component("pupur", Pupur);

Vue.filter("formatSeconds", d => formatSeconds(d));
Vue.filter("formatTime", d => (d ? formatTime(d) : ""));
Vue.filter("mapBoardType", v => (mapAlarmTypes[v] || {}).name || v);
Vue.filter("mapAlarmLevel", v => alarmLevels[v] || v);
Vue.filter("mapBoardAlarmName", v => mapBoardAlarmName(v.board_type, v.alarmtype, v.portno));

new Vue({ router, i18n, render: h => h(App) }).$mount("#app");
