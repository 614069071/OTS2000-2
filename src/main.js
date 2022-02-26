import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import i18n from "@/locale";
import fetch from "@/fetch";
import { formatSeconds, clone, difference, formatTime, mapAlarmTypes, alarmLevels, mapBoardAlarmName } from "@/utils";
import Structure from "@/components/structure";
import Pupur from "@/components/pupur";

import "@/element";
import "@/styles";

Vue.prototype.$bus = new Vue();
Vue.prototype.$http = fetch;
Vue.prototype.$clone = clone;
Vue.prototype.$difference = difference;

Vue.config.productionTip = false;

Vue.component("structure", Structure);
Vue.component("pupur", Pupur);

Vue.filter("formatSeconds", (d) => formatSeconds(d));
Vue.filter("formatTime", (d) => formatTime(d));
Vue.filter("mapBoardType", (v) => (mapAlarmTypes[v] || {}).name || v);
Vue.filter("mapAlarmLevel", (v) => alarmLevels[v] || v);
Vue.filter("mapAlarmLevel", (v) => alarmLevels[v] || v);
Vue.filter("mapBoardAlarmName", (v) => mapBoardAlarmName(v.board_type, v.alarmtype, v.portno));

Vue.directive("limit", {
  bind(el, { value }, { context }) {
    const reg = /([1-9]\d*\.?\d*)|(0\.\d*[1-9])/;
    const { key = "", min = 0, max = 0 } = value;
    const keys = key.split(".");
    let count = 0;
    let me = context;

    while (me && count < keys.length - 1) {
      me = me[keys[count]];
      count++;
    }

    el.limit = (e) => {
      const { value } = e.target;

      if (reg.test(value)) {
        if (Number(value) < min) {
          return (me[keys[keys.length - 1]] = min);
        }

        if (Number(value) > max) {
          return (me[keys[keys.length - 1]] = max);
        }
      } else {
        me[keys[keys.length - 1]] = "";
      }
    };

    el.addEventListener("input", el.limit);
  },
  unbind(el) {
    el.removeEventListener("input", el.limit);
    delete el.limit;
  },
});

new Vue({ router, i18n, render: (h) => h(App) }).$mount("#app");
