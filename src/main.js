import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import Bus from "@/utils/bus";
import i18n from "@/locale";
import fetch from "@/fetch";
import { formatSeconds, clone, difference, formatTime } from "@/utils";
import Structure from "@/components/structure";
import Pupur from "@/components/pupur";

import "@/element";
import "@/styles";

Vue.prototype.$bus = Bus;
Vue.prototype.$http = fetch;
Vue.prototype.$clone = clone;
Vue.prototype.$difference = difference;

Vue.config.productionTip = false;

Vue.component("structure", Structure);
Vue.component("pupur", Pupur);

Vue.filter("formatSeconds", (d) => formatSeconds(d));
Vue.filter("formatTime", (d) => formatTime(d));

new Vue({ router, store, i18n, render: (h) => h(App) }).$mount("#app");
