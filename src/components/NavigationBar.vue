<script lang="ts" setup>
import { ref } from "vue";

const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {};
</script>
<template>
  <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0">
      <img
        style="width: 100px"
        src="../assets/vue.svg"
        alt="宇浩・星陳在線練習"
      />
    </el-menu-item>
    <div class="flex-grow" />
    <el-sub-item index="practice">
      <template #title>字根練習</template>
      <el-menu-item index="common-practice">常用字根</el-menu-item>
      <el-menu-item index="uncommon-practice">生僻字根</el-menu-item>
    </el-sub-item>
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
</style>
