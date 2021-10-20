<script setup lang="ts">
import SideNav from "../../modules/sidenav/sidenav.vue";
import PaintArea from "./paint.vue";
</script>

<template>
  <div class="h-screen flex">
    <side-nav />
    <PaintArea class="flex-1" />
  </div>
</template>
