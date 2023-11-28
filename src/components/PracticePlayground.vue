<script setup lang="ts">
import { computed, ref } from "vue";
import {
  RadicalType,
  savePracticingRadicalTypeToStorage,
  loadPracticingRadicalTypeFromStorage,
} from "../shared/radical";
import PracticeRadicals from "./PracticeRadicals.vue";
const props = defineProps<{
  radicals: { text: string; code: string; type: RadicalType }[];
  schema: string;
}>();
const radicalType = ref(loadPracticingRadicalTypeFromStorage());
const filteredRadicals = computed(() => {
  if (radicalType.value === "both") {
    return props.radicals;
  }
  return props.radicals.filter(
    (radical) => radical.type === radicalType.value || radical.type === "both",
  );
});
const radicalTypeChanged = (val: string | number | boolean) => {
  const type = val as RadicalType;
  savePracticingRadicalTypeToStorage(type);
};
</script>

<template>
  <!-- 顶部选择框 -->
  <el-row class="row" justify="end">
    <el-col :span="8">
      <el-radio-group v-model="radicalType" @change="radicalTypeChanged">
        <el-radio-button label="simplified">简体练习</el-radio-button>
        <el-radio-button label="traditional">繁體練習</el-radio-button>
        <el-radio-button label="both">全部</el-radio-button>
      </el-radio-group>
    </el-col>
  </el-row>
  <el-row class="row" justify="center">
    <el-col :span="5">
      <PracticeRadicals :radicals="filteredRadicals" :schema="schema" />
    </el-col>
  </el-row>
</template>
