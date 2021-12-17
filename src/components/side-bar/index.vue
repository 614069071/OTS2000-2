<template>
  <div class="sidebar">
    <!-- background-color="#f0f7ff"  text-color="rgba(255, 255, 255, 0.65)" -->
    <el-menu class="sidebar-el-menu" :default-active="onRoutes" :default-openeds="defaultOpenedsArray" text-color="#003466" active-text-color="#fff" unique-opened :collapse="collapse">
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
          icon: "icon-system",
          menuName: "设备管理",
          children: [
            {
              icon: "",
              menuName: "设备概览",
              menuLink: "/",
            },
            {
              icon: "",
              menuName: "单板列表",
              menuLink: "/veneer-list",
            },
          ],
        },
        {
          icon: "icon-warning",
          menuName: "告警管理",
          children: [
            {
              icon: "",
              menuName: "当前告警",
              menuLink: "/alarm-manage",
            },
            {
              icon: "",
              menuName: "历史告警",
              menuLink: "/alarm-manage/history-alarm",
            },
          ],
        },
        {
          icon: "icon-earth",
          menuName: "网络管理",
          children: [
            {
              icon: "",
              menuName: "IP地址配置",
              menuLink: "/network-manage",
            },
            {
              icon: "",
              menuName: "SNMP配置",
              menuLink: "/network-manage/snmp-config",
            },
            {
              icon: "",
              menuName: "串口信息",
              menuLink: "/network-manage/port-info",
            },
            {
              icon: "",
              menuName: "级联配置",
              menuLink: "/network-manage/cascade-config",
            },
          ],
        },
        {
          icon: "icon-security",
          menuName: "安全管理",
          children: [
            {
              icon: "",
              menuName: "用户管理",
              menuLink: "/safety-manage",
            },
          ],
        },
        {
          icon: "icon-ampl",
          menuId: 5,
          menuName: "维护管理",
          children: [
            {
              icon: "",
              menuName: "系统信息",
              menuLink: "/maint-manage",
            },
            {
              icon: "",
              menuName: "远程升级",
              menuLink: "/upgrade",
            },
            {
              icon: "",
              menuName: "运行日志",
              menuLink: "/maint-manage/run-log",
            },
          ],
        },
      ];
    },

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
    width: 260px;
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

.el-submenu__title,
.el-menu-item {
  height: 66px !important;
  line-height: 66px !important;
  font-size: 18px;
  border-bottom: 1px solid #edf0ef;
}

.el-submenu__title:hover,
.el-menu-item:hover {
  background-color: #fff !important;
}

.el-menu-item.is-active {
  // background-color: var(--default-color) !important;
  background-color: #003466 !important;
}
</style>
