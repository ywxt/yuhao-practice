import { Ref } from "vue";

export default function update(status: Ref<any>) {
  const tmp = status.value;
  status.value = null;
  status.value = tmp;
}
