<script setup lang="ts">
import { ref } from "vue";
const props = defineProps<{
  radical: string;
  code: string;
  tip: boolean;
}>();
const events = defineEmits<{
  completed: [status: "success" | "error"];
}>();
const inputValue = ref("");
const showTip = ref(false);
const onInput = (value: string) => {
  if (value.toLowerCase() === props.code.toLowerCase()) {
    events("completed", "success");
    inputValue.value = "";
    showTip.value = false;
  } else if (value.length === props.code.length) {
    events("completed", "error");
    inputValue.value = "";
    showTip.value = false;
  }
};
const onSpace = (event: KeyboardEvent | Event) => {
  if (event instanceof KeyboardEvent && event.key === " ") {
    showTip.value = !showTip.value;
    event.preventDefault();
    event.stopPropagation();
  }
};
</script>

<template>
  <div class="row">
    <el-card>
      <span class="radical-text">{{ radical }}</span>
      <p v-if="tip || showTip">{{ code }}</p>
    </el-card>
  </div>
  <div>
    <el-input
      input-style="text-align: center;"
      v-model="inputValue"
      placeholder="按空格提示"
      size="large"
      @input="onInput"
      @keydown="onSpace"
    ></el-input>
  </div>
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
