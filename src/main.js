import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import i18n from '@/locale';
import fetch from '@/fetch';
import { formatTime } from '@/utils';
import Structure from '@/components/structure'

import '@/element';
import '@/styles';

Vue.prototype.$http = fetch;

Vue.config.productionTip = false;

Vue.component('structure', Structure);

Vue.filter('formatTimeYMD', d => formatTime(d));

Vue.filter('formatTimeYMDHMS', d => formatTime(d, 1));

new Vue({ router, store, i18n, render: h => h(App) }).$mount('#app');
