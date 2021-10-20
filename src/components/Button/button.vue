<script lang="ts" setup>
import { onMounted } from "vue";

interface IButtonPrrops {
  label?: string;
  onClick?: Function;
}

onMounted(() => {
  console.log("Button component is mounted");
});

const props = withDefaults(defineProps<IButtonPrrops>(), {});
const emits = defineEmits(["onClick"]);
const onPressed = () => {
  emits("onClick");
};
</script>

<template>
  <button
    class="d-flex ml-2 text-red-400 p-2 border-blue-300 border-2"
    @click="onPressed"
  >
    {{ props.label }}
  </button>
</template>
