<script setup lang="ts">
import { Ref, computed, ref } from "vue";
import RadicalInput from "./RadicalInput.vue";
import {
  MemorizingItem,
  loadMemorizedRadicalFromStorage,
  saveMemorizedRadicalToStorage,
} from "../shared/radical";
const props = defineProps<{
  radicals: { text: string; code: string }[];
  schema: string;
}>();
const memorizedRadicals = ref(loadMemorizedRadicalFromStorage(props.schema));
const initRemainingRadicals = (status: "unmemorized" | "memorized") => {
  let radicals = props.radicals;
  if (status === "unmemorized") {
    radicals = radicals.filter(
      (radical) => !memorizedRadicals.value.has(radical.text),
    );
  }

  return radicals.map((radical) => {
    return {
      radical: radical.text,
      code: radical.code,
      status,
      frequency: memorizedRadicals.value.get(radical.text)?.frequency ?? 0,
    };
  });
};
const remainingRadicals = ref(
  (() => {
    let radicals = initRemainingRadicals("unmemorized");
    if (radicals.length === 0) {
      radicals = initRemainingRadicals("memorized");
    }
    return radicals;
  })(),
);
const pushNextUnmemorizedRadical = (queue: MemorizingItem[]) => {
  if (remainingRadicals.value.length > 0) {
    const radical = remainingRadicals.value.shift()!;
    queue.push(radical);
  }
  return queue;
};

const practiceQueue: Ref<MemorizingItem[]> = ref(
  (() => {
    const queue = pushNextUnmemorizedRadical([]);
    return pushNextUnmemorizedRadical(queue);
  })(),
);

const radical = computed(() => {
  return practiceQueue.value[0];
});

const memorizedCount = computed(() => {
  return memorizedRadicals.value.size;
});
const percentage = computed(() => {
  return (memorizedCount.value / props.radicals.length) * 100;
});
const percentageStatus = computed(() => {
  if (percentage.value < 50) {
    return "exception";
  } else if (percentage.value < 80) {
    return "warning";
  }
  return "success";
});

const onCompleted = (status: "success" | "error") => {
  if (status === "success") {
    if (
      practiceQueue.value[0].status === "memorizing" ||
      practiceQueue.value[0].status === "memorized"
    ) {
      practiceQueue.value[0].status = "memorized";
      practiceQueue.value[0].frequency++;
      memorizedRadicals.value.set(
        practiceQueue.value[0].radical,
        practiceQueue.value[0],
      );
      saveMemorizedRadicalToStorage(props.schema, memorizedRadicals.value);
      pushNextUnmemorizedRadical(practiceQueue.value);
    } else if (practiceQueue.value[0].status === "unmemorized") {
      practiceQueue.value.push({
        radical: practiceQueue.value[0].radical,
        code: practiceQueue.value[0].code,
        status: "memorizing",
        frequency: 0,
      });
    }
    practiceQueue.value.shift();
    if (practiceQueue.value.length === 0) {
      remainingRadicals.value = initRemainingRadicals("memorized");
      practiceQueue.value = pushNextUnmemorizedRadical([]);
    }
  } else {
    practiceQueue.value[0].status = "unmemorized";
  }
};
</script>

<template>
  <div class="row">
    <RadicalInput
      :radical="radical.radical"
      :code="radical.code"
      @completed="onCompleted"
      :tip="radical.status === 'unmemorized'"
    />
  </div>
  <!--進度條-->
  <div class="row">
    <el-progress
      :percentage="percentage"
      :status="percentageStatus"
      text-inside
    ></el-progress>
  </div>
</template>

<style scoped>
.row {
  margin-bottom: 10px;
}
</style>
