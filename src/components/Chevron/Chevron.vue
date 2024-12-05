<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
  isOpen: boolean;
}>();
</script>

<template>
  <span :class="['chevron', { open: isOpen }]">▼</span>
</template>

<style scoped lang="scss">
@use "./Chevron.scss";
</style>
