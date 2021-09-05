<script setup lang="ts">
import { ref } from "vue";
import { getMedia, getAllAvailableCameras } from "./media";
console.log("this is from camera module");

const run = async () => {
  const camList = await getAllAvailableCameras();
  console.log(camList);
};
run();
</script>
<template>
  <p class="text text-red-200">this is some test</p>
</template>
