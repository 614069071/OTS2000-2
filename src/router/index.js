import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/login';
import NProgress from "nprogress";
import store from '@/store';

Vue.use(VueRouter);

const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err);
}

const VueRouterReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(to) {
  return VueRouterReplace.call(this, to).catch(err => err);
}

const staticRoutes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

export const dynamicRouter = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "view" */ '@/views/equip-manage'),
    meta: { name: '设备管理' },
    children: [
      {
        path: '/',
        name: 'equip-overview',
        component: () => import(/* webpackChunkName: "view" */ '@/views/equip-manage/equip-overview'),
        meta: { name: '设备概览' },
      },
      {
        path: '/veneer-list',
        name: 'veneer-list',
        component: () => import(/* webpackChunkName: "view" */ '@/views/equip-manage/veneer-list'),
        meta: { name: '单板列表' },
      },
    ]
  },
  {
    path: '/alarm-manage',
    name: 'alarm-manage',
    component: () => import(/* webpackChunkName: "view" */ '@/views/alarm-manage'),
    meta: { name: '告警管理' },
    children: [
      {
        path: '/alarm-manage',
        name: 'current-alarm',
        component: () => import(/* webpackChunkName: "view" */ '@/views/alarm-manage/current-alarm'),
        meta: { name: '当前告警' },
      },
      {
        path: '/alarm-manage/history-alarm',
        name: 'history-alarm',
        component: () => import(/* webpackChunkName: "view" */ '@/views/alarm-manage/history-alarm'),
        meta: { name: '历史告警' },
      },
    ]
  },
  {
    path: '/network-manage',
    name: 'network-manage',
    component: () => import(/* webpackChunkName: "view" */ '@/views/network-manage'),
    meta: { name: '网络管理' },
    children: [
      {
        path: '/network-manage',
        name: 'ip-config',
        component: () => import(/* webpackChunkName: "view" */ '@/views/network-manage/ip-config'),
        meta: { name: 'IP地址配置' },
      },
      {
        path: '/network-manage/snmp-config',
        name: 'snmp-config',
        component: () => import(/* webpackChunkName: "view" */ '@/views/network-manage/snmp-config'),
        meta: { name: 'SNMP配置' },
      },
      {
        path: '/network-manage/port-info',
        name: 'port-info',
        component: () => import(/* webpackChunkName: "view" */ '@/views/network-manage/port-info'),
        meta: { name: '端口信息' },
      },
      {
        path: '/network-manage/cascade-config',
        name: 'cascade-config',
        component: () => import(/* webpackChunkName: "view" */ '@/views/network-manage/cascade-config'),
        meta: { name: '级联配置' },
      },

    ]
  },
  {
    path: '/safety-manage',
    name: 'safety-manage',
    component: () => import(/* webpackChunkName: "view" */ '@/views/safety-manage'),
    meta: { name: '安全管理' },
    children: [
      {
        path: '/safety-manage',
        name: 'user-manage',
        component: () => import(/* webpackChunkName: "view" */ '@/views/safety-manage/user-manage'),
        meta: { name: '广告管理' },
      }
    ]
  },
  {
    path: '/maint-manage',
    name: 'log',
    component: () => import(/* webpackChunkName: "view" */ '@/views/maint-manage'),
    meta: { name: '维护管理' },
    children: [
      {
        path: '/maint-manage/run-log',
        name: 'run-log',
        component: () => import(/* webpackChunkName: "view" */ '@/views/maint-manage/run-log'),
        meta: { name: '运行日志' },
      },
    ]
  },
  {
    path: '/system',
    component: () => import(/* webpackChunkName: "view" */ '@/views/system'),
    meta: { name: '账号管理' },
    children: [
      {
        path: '/system',
        name: 'system-account',
        component: () => import(/* webpackChunkName: "view" */ '@/views/system/account'),
        meta: { name: '账号管理' },
      },
    ]
  },
  {
    path: '/ota',
    component: () => import(/* webpackChunkName: "view" */ '@/views/ota'),
    meta: { name: '固件升级' },
    children: [
      {
        path: '/ota',
        name: 'ota-list',
        component: () => import(/* webpackChunkName: "view" */ '@/views/ota/list'),
        meta: { name: '发布列表' },
      },
      {
        path: '/ota/add',
        name: 'ota-add',
        component: () => import(/* webpackChunkName: "view" */ '@/views/ota/add'),
        meta: { name: '添加发布' },
      },
      {
        path: '/ota/editor',
        name: 'ota-editor',
        component: () => import(/* webpackChunkName: "view" */ '@/views/ota/editor'),
        meta: { name: '编辑发布' },
      },
      {
        path: '/ota/detail',
        name: 'ota-detail',
        component: () => import(/* webpackChunkName: "view" */ '@/views/ota/detail'),
        meta: { name: '发布详情' },
      }
    ]
  }
];

export const otherRouter = [
  {
    path: '/error',
    component: () => import(/* webpackChunkName: "view" */ '@/views/common/e404')
  },
  {
    path: '*',
    redirect: '/error'
  }
]

export const dynamicStRouter = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "view" */ '@/views/layout'),
    meta: { name: '首页' },
    children: [
      // {
      //   path: '/',
      //   name: 'welcome',
      //   component: () => import(/* webpackChunkName: "view" */ '@/views/welcome'),
      //   meta: { name: '欢迎' }
      // },
      ...dynamicRouter,
      ...otherRouter
    ]
  }
];

const router = new VueRouter({ routes: [...staticRoutes, ...dynamicStRouter] });

router.beforeEach((to, from, next) => {
  NProgress.start();

  next();
});

router.afterEach(({ matched = [] }) => {
  const route = matched[matched.length - 1];
  const exclude = ['/login', '/error'];
  const isExclude = exclude.includes(route.path);

  !isExclude && store.commit('UPDATE_CACHE_ROUTER', { path: route.path, title: route.meta.name });
  !isExclude && store.commit('UPDATE_DEFAULT_ACTIVE', route.path);

  NProgress.done();
});

export default router
