<script setup lang="ts">
import { Ref, ref } from "vue";
import { RadicalType } from "../shared/radical";
import PracticeRadicals from "./PracticeRadicals.vue";

const radicalType: Ref<RadicalType> = ref("simplified");
const radicals = ref([{ text: "一", code: "Fi" }]);
</script>

<template>
  <!-- 顶部选择框 -->
  <el-row class="row" justify="end">
    <el-col :span="8">
      <el-radio-group v-model="radicalType">
        <el-radio-button label="simplified">简体练习</el-radio-button>
        <el-radio-button label="traditional">繁體練習</el-radio-button>
        <el-radio-button label="both">全部</el-radio-button>
      </el-radio-group>
    </el-col>
  </el-row>
  <el-row class="row" justify="center">
    <el-col :span="5">
      <PracticeRadicals :radicals="radicals" schema="common-radicals" />
    </el-col>
  </el-row>
</template>
