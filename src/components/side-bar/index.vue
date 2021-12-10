<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :default-openeds="defaultOpenedsArray"
      background-color="#001529"
      text-color="rgba(255, 255, 255, 0.65)"
      active-text-color="#fff"
      unique-opened
      :collapse="collapse"
    >
      <middle-menu v-for="(item, i) in menuTreeColle" :model="item" :key="item.path" :index="i" />
    </el-menu>
  </div>
</template>

<script>
import MiddleMenu from "./middle-menu";
import { mapState } from "vuex";
import { storages } from "@utils";

export default {
  name: "side-bar",
  props: {
    collapse: { type: Boolean },
    // list: { type: Array, default: () => [] },
  },
  components: { MiddleMenu },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      onRoutes: "routerDefaultActive",
      defaultOpenedsArray: "defaultOpenedsArray",
    }),
    menuTreeColle() {
      return [
        {
          component: "Home",
          iconCls: "device-management",
          menuId: 1,
          menuName: "设备管理",
          children: [
            {
              component: "",
              iconCls: "",
              menuId: 6,
              menuName: "设备概览",
              menuLink: "/",
              parentId: 1,
            },
            {
              component: "",
              iconCls: "",
              menuId: 7,
              menuName: "单板列表",
              menuLink: "/veneer-list",
              parentId: 1,
            },
          ],
        },
        {
          component: "Home",
          iconCls: "warning",
          menuId: 2,
          menuName: "告警管理",
          children: [
            {
              component: "",
              iconCls: "",
              menuId: 8,
              menuName: "当前告警",
              menuLink: "/alarm-manage",
              parentId: 2,
            },
            {
              component: "",
              iconCls: "",
              menuId: 9,
              menuName: "历史告警",
              menuLink: "/alarm-manage/history-alarm",
              parentId: 2,
            },
          ],
        },
        {
          component: "Home",
          iconCls: "network",
          menuId: 3,
          menuName: "网络管理",
          children: [
            {
              component: "",
              iconCls: "",
              menuId: 8,
              menuName: "IP地址配置",
              menuLink: "/network-manage",
              parentId: 2,
            },
            {
              component: "",
              iconCls: "",
              menuId: 9,
              menuName: "SNMP配置",
              menuLink: "/network-manage/snmp-config",
              parentId: 2,
            },
            {
              component: "",
              iconCls: "",
              menuId: 10,
              menuName: "串口信息",
              menuLink: "/network-manage/port-info",
              parentId: 2,
            },
            {
              component: "",
              iconCls: "",
              menuId: 11,
              menuName: "级联配置",
              menuLink: "/cascadeConfig",
              parentId: 2,
            },
          ],
        },
        {
          component: "Home",
          iconCls: "security",
          menuId: 4,
          menuName: "安全管理",
          children: [
            {
              component: "",
              iconCls: "",
              menuId: 12,
              menuName: "用户管理",
              menuLink: "/userAdmin",
              parentId: 2,
            },
          ],
        },
        {
          component: "Home",
          iconCls: "maintenance",
          menuId: 5,
          menuName: "维护管理",
          children: [
            {
              component: "",
              iconCls: "",
              menuId: 13,
              menuName: "系统信息",
              menuLink: "/systemInfo",
              parentId: 2,
            },
            {
              component: "",
              iconCls: "",
              menuId: 14,
              menuName: "远程升级",
              menuLink: "/upgrade",
              parentId: 2,
            },
            {
              component: "",
              iconCls: "",
              menuId: 15,
              menuName: "运行日志",
              menuLink: "/runningLog",
              parentId: 2,
            },
          ],
        },
      ];
    },
    // mapMenuTree() {
    // 	const items = [
    // 		{
    // 			title: '综合数据',
    // 			icon: 'if if-appstore',
    // 			path: '/',
    // 			meta: {},
    // 		},
    // 		{
    // 			title: '订单数据',
    // 			icon: 'if if-barchart',
    // 			path: '/order',
    // 			meta: {},
    // 		},
    // 		{
    // 			title: '产品数据',
    // 			icon: 'if if-linechart',
    // 			path: '/product',
    // 			meta: {},
    // 		},
    // 		{
    // 			title: '广告管理',
    // 			icon: 'if if-edit-square',
    // 			path: '/banner',
    // 			meta: {},
    // 		},
    // 		{
    // 			title: '日志查询',
    // 			icon: 'if if-filesearch',
    // 			path: '/log',
    // 			meta: {},
    // 		},
    // 		{
    // 			title: '账号管理',
    // 			icon: 'if if-user',
    // 			path: '/system',
    // 			meta: {},
    // 		},
    // 	];

    // 	function deal(arr, pre) {
    // 		arr.forEach((e, i) => {
    // 			if (!e.meta) e.meta = {};
    // 			e.meta.index = pre ? `${pre}-${i}` : `${i}`;
    // 			if (e.children && e.children.length) {
    // 				deal(e.children, e.meta.index);
    // 			}
    // 		});
    // 	}

    // 	deal(items);
    // 	return items;
    // },
  },
};
</script>

<style lang="scss">
.sidebar {
  overflow-x: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
  }

  .sidebar-el-menu {
    overflow: hidden;
  }

  .sidebar-el-menu:not(.el-menu--collapse) {
    width: 160px;
    // min-width: 210px; //该写法，内容会自动撑开，但收起动画会不流畅
  }

  .el-menu {
    border-right: 0;
  }

  ul {
    height: 100%;
  }

  .el-menu--collapse > .middle-menu > .el-submenu > .el-submenu__title {
    span {
      height: 0;
      width: 0;
      overflow: hidden;
      visibility: hidden;
      display: inline-block;
    }
    .el-submenu__icon-arrow {
      display: none;
    }
  }
}

.el-menu-item .menu-icon {
  margin-right: 12px;
  display: inline-block;
  width: 24px;
  text-align: center;
}

.el-menu-item.is-active {
  background-color: var(--default-color) !important;
}
</style>
