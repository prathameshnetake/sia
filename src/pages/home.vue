<script setup lang="ts">
import MainView from "../screens/main/main.vue";
import { useSettings } from "../store/modules/settings";
console.log("this is home page");
const settingsState = useSettings();
settingsState.getAvailableCamerasFromSystem();
</script>

<template>
  <main-view />
</template>
