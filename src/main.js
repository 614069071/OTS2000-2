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
Vue.filter("mapBoardType", (v) => mapAlarmTypes[v].name || v);
Vue.filter("mapAlarmLevel", (v) => alarmLevels[v] || v);
Vue.filter("mapAlarmLevel", (v) => alarmLevels[v] || v);
Vue.filter("mapBoardAlarmName", (v) => {
  return mapBoardAlarmName(v.board_type, v.alarmtype, v.portno);
});

new Vue({ router, i18n, render: (h) => h(App) }).$mount("#app");
