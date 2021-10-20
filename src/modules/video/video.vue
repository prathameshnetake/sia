<script setup lang="ts">
import { onMounted, ref, onUpdated } from "vue";
import { useSettings } from "../../store/modules/settings";

const settings = useSettings();
const video = ref<HTMLVideoElement | null>(null);
console.log(settings);
</script>

<template>
  <div class="bg-gray-100 flex-1">
    <video
      height="480"
      width="720"
      autoplay
      :srcObject="settings.getActiveVideoStream"
    >
      Video is not supported in your browser
    </video>
  </div>
</template>
