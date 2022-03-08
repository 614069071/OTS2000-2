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

Vue.filter("formatSeconds", d => formatSeconds(d));
Vue.filter("formatTime", d => (d ? formatTime(d) : ""));
Vue.filter("mapBoardType", v => (mapAlarmTypes[v] || {}).name || v);
Vue.filter("mapAlarmLevel", v => alarmLevels[v] || v);
Vue.filter("mapAlarmLevel", v => alarmLevels[v] || v);
Vue.filter("mapBoardAlarmName", v => mapBoardAlarmName(v.board_type, v.alarmtype, v.portno));

Vue.directive("limit", {
  bind(el) {
    const toast = document.createElement("div");
    toast.classList.add("input-text-toast");

    document.body.appendChild(toast);

    el.$node = toast;
  },
  update(el, { value }) {
    const reg = /(^[-]?[0-9]{0,}([.][0-9]{0,})?$)|(^[-]?0?(\.[0-9]{0,})?$)/;
    const { min, max, data } = value;
    const val = parseFloat(data);
    const { left, top } = el.getBoundingClientRect();
    el.$node.style.left = left + "px";
    el.$node.style.top = top - 25 + "px";

    if (data != 0 && !data) return;

    if (reg.test(data)) {
      if (!!min || min === 0) {
        el.$node.innerHTML = "有效值不能小于" + min;
      }

      if (!!max || max === 0) {
        el.$node.innerHTML = "有效值不能大于" + max;
      }

      if ((!!min || min === 0) && (!!max || max === 0)) {
        el.$node.innerHTML = "有效值范围为" + min + "~" + max;
      }

      if (data.length > 0) {
        if (val >= min && val <= max) {
          el.$node.style.display = "none";
        } else {
          el.$node.style.display = "block";
        }
      } else {
        el.$node.style.display = "none";
      }
    } else {
      el.$node.innerHTML = "请输入有效值";

      if (data.length > 0) {
        el.$node.style.display = "block";
      } else {
        el.$node.style.display = "none";
      }
    }
  },
  unbind(el) {
    document.body.removeChild(el.$node);
    delete el.$node;
  },
});

new Vue({ router, i18n, render: h => h(App) }).$mount("#app");
