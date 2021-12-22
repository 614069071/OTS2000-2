import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { storages } from '@utils';

Vue.use(Vuex);

export default new Store({
  state: {
    __accessToken__: storages.get('__accessToken__') || '',
    routerDefaultActive: '/' || storages.get('DEFAULT_ACTIVE') || '',
    defaultOpenedsArray: [],
    iSuper: false,
  },
  mutations: {
    // 登录成功设置
    UPDATE_TOKEN(state, toekn) {
      storages.set('__accessToken__', toekn);
      state.__accessToken__ = toekn;
    },
    // 设置默认展开菜单项
    UPDATE_DEFAULT_ACTIVE(state, data = {}) {
      state.routerDefaultActive = data;
      storages.set('DEFAULT_ACTIVE', data);
    },
    // 设置菜单收起
    UPDATE_DEFAULT_OPEN(state) {
      state.defaultOpenedsArray = [];
    }
  },
});
