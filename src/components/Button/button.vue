<script lang="ts" setup>
    const test = (e: Event) => {
        console.log(e.target)
    }
</script>

<template>
    <button class="d-flex ml-2 text-red-400 p-2 border-blue-300 border-2" @click="test">Test</button>
</template>