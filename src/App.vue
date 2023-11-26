<script setup lang="ts">
import PracticeRadicals from "./components/PracticeRadicals.vue";
</script>

<template>
  <el-container class="center-container">
    <el-header>Header</el-header>
    <el-main justify="center" align="middle" class="center-content">
      <PracticeRadicals />
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<style scoped>
@media (min-width: 768px) {
  .center-container {
    width: 750px;
  }
}

@media (min-width: 992px) {
  .center-container {
    width: 970px;
  }
}

@media (min-width: 1200px) {
  .center-container {
    width: 1170px;
  }
}

.center-container {
  height: 100vh;
  /* width: 100vw; */
  /* 让容器充满整个视口高度 */
  display: flex;
  justify-content: center;
  align-items: center;
}

.center-content {
  width: 100%;
  /* 确保内容在容器内居中 */
}
</style>
