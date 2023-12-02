<script lang="ts" setup>
import { ref } from "vue";

const activeIndex = ref("1");
</script>
<template>
  <el-menu
    class="nav-bar"
    :default-active="activeIndex"
    mode="horizontal"
    :ellipsis="false"
  >
    <el-menu-item index="0">
      <img
        style="width: 100px"
        src="../assets/vue.svg"
        alt="宇浩・星陳在線練習"
      />
    </el-menu-item>
    <div class="flex-grow" />
    <el-sub-menu index="practice">
      <template #title>字根練習</template>
      <router-link to="/practice/common-radicals">
        <el-menu-item index="common-practice">常用字根</el-menu-item>
      </router-link>
      <router-link to="/practice/uncommon-radicals">
        <el-menu-item index="uncommon-practice">生僻字根</el-menu-item>
      </router-link>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<style>
.flex-grow {
  flex-grow: 1;
}

@media (min-width: 768px) {
  .nav-bar {
    padding: 0;
  }
}

@media (min-width: 992px) {
  .nav-bar {
    padding: 0;
  }
}

@media (min-width: 1200px) {
  .nav-bar {
    padding-left: 10rem;
  }
}
</style>
