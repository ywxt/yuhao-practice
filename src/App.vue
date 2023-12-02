<script setup lang="ts">
import NavigationBar from "./components/NavigationBar.vue";
</script>

<template>
  <el-container class="center-container">
    <el-header class="header">
      <NavigationBar />
    </el-header>
    <el-main justify="center" align="middle" class="center-content">
      <router-view />
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<style scoped>
.center-content {
  text-align: center;
}

.center-container {
  height: 100vh;
  width: 100vw;
  /* 让容器充满整个视口高度 */
  display: flex;
  text-align: center;
}

.el-header {
  padding: 0;
  margin: 0;
}
</style>
