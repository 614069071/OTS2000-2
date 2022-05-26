<template>
  <router-view></router-view>
</template>

<script>
import { updateAlarmTypes } from "@/utils";
export default {
  beforeRouteEnter(to, from, next) {
    updateAlarmTypes();
    next();
  },
};
</script>
