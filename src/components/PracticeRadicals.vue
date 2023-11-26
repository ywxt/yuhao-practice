<script setup lang="ts">
import { Ref, ref } from "vue";
type RadicalType = "simplified" | "traditional" | "all";
const radicalType: Ref<RadicalType> = ref("simplified");
const tip = ref("");
const inputValue = ref("");
const history = ref([]);
</script>

<template>
  <!-- 顶部选择框 -->
  <el-row class="row" justify="end">
    <el-col :span="3">
      <el-select v-model="radicalType" placeholder="繁简字根">
        <el-option label="简体字根" value="simplified"></el-option>
        <el-option label="繁體字根" value="traditional"></el-option>
        <el-option label="全部" value="all"></el-option>
      </el-select>
    </el-col>
  </el-row>

  <el-row class="row" justify="center">
    <el-col :span="5">
      <el-card>
        <span class="radical-text">字根</span>
        <p v-if="tip">{{ tip }}</p>
      </el-card>
    </el-col>
  </el-row>
  <!-- 中间输入框 -->
  <el-row class="row" justify="center">
    <el-col :span="5">
      <el-input
        v-model="inputValue"
        placeholder="请输入内容"
        size="large"
      ></el-input>
    </el-col>
  </el-row>

  <!-- 底部列表 -->
  <el-row>
    <el-col :span="24">
      <el-table :data="history" style="width: 100%">
        <el-table-column prop="index" label="序號"></el-table-column>
        <el-table-column prop="rank" label="成績"></el-table-column>
      </el-table>
    </el-col>
  </el-row>
</template>

<style scoped>
.row {
  margin-bottom: 30px;
}
.radical-text {
  font-size: 3rem;
  font-weight: bold;
}
</style>
