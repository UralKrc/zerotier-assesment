<script setup lang="ts">
import { defineProps } from "vue";
import { Device } from "../../types/Device";
import { formatDate } from "../../utils/dateHelper";

defineProps<{
  device: Device;
}>();
</script>

<template>
  <div v-if="device" class="device-detail">
    <h3>Device Details</h3>
    <p>
      <strong>Name:</strong>
      {{ device.name || "This device doesn't have any name" }}
    </p>
    <p><strong>ID:</strong> {{ device.id }}</p>
    <p><strong>Address:</strong> {{ device.nodeId }}</p>
    <p>
      <strong>Last Online:</strong>
      {{ formatDate(device.lastOnline) }}
    </p>
    <p>
      <strong>Last Seen:</strong>
      {{ formatDate(device.lastSeen) }}
    </p>
  </div>
</template>

<style scoped lang="scss">
@use "./DeviceDetail.scss";
</style>
