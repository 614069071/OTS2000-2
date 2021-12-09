import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import router from '@router';
import { storages } from '@utils';

Vue.use(Vuex);

export default new Store({
  state: {
    __accessToken__: storages.get('__accessToken__') || '',
    breadcrumbRouter: storages.get('CACHE_ROUTERS') || [],
    routerDefaultActive: '/' || storages.get('DEFAULT_ACTIVE') || '',
    defaultOpenedsArray: [],
  },
  mutations: {
    // 登录成功设置
    UPDATE_TOKEN(state, toekn) {
      storages.set('__accessToken__', toekn);
      state.__accessToken__ = toekn;
    },
    // 更新 tab 列表
    UPDATE_CACHE_ROUTER(state, data = { meta: '' }) {
      const list = state.breadcrumbRouter;
      const is = list.find(e => e.path === data.path);
      if (is) return;
      list.push(data);
      storages.set('CACHE_ROUTERS', list);
    },
    // 删除 tab 项
    DELETE_CACHE_ROUTER(state, path) {
      let list = state.breadcrumbRouter;
      let i = 0;

      const isHave = list.some((e, index) => {
        if (e.path === path) i = index;

        return e.path === path;
      });

      if (!isHave) return;

      list.splice(i, 1);
      state.breadcrumbRouter = list;
      storages.set('CACHE_ROUTERS', list);

      const item = list[i - 1];
      this.commit('UPDATE_DEFAULT_ACTIVE', item.path);
      router.push(item.path);
    },
    // 删除 tab 项
    DELETE_CACHE_BREAD(state, path) {
      let list = state.breadcrumbRouter;
      let i = 0;

      const isHave = list.some((e, index) => {
        if (e.path === path) i = index;

        return e.path === path;
      });

      if (!isHave) return;

      list.splice(i, 1);
      state.breadcrumbRouter = list;
      storages.set('CACHE_ROUTERS', list);

      const item = list[i - 1];
      this.commit('UPDATE_DEFAULT_ACTIVE', item.path);
    },
    // 清除 tab 
    CLEAR_CACHE_ROUTER(state) {
      state.breadcrumbRouter = [];
      storages.set('CACHE_ROUTERS', []);
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
