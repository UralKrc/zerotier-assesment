<script setup lang="ts">
import { defineEmits, defineProps } from "vue";
import { Device } from "../../types/Device";
import Chevron from "../Chevron/Chevron.vue";
import DeviceDetail from "../DeviceDetail/DeviceDetail.vue";

defineProps<{
  device: Device;
  selectedDevice: Device | null;
}>();

const emit = defineEmits<{
  (e: "deviceSelected", device: Device): void;
}>();

const selectDevice = (device: Device): void => {
  emit("deviceSelected", device);
};
</script>

<template>
  <div
    :class="[
      'device-card',
      { selected: selectedDevice && selectedDevice.id === device.id },
    ]"
    @click.stop="selectDevice(device)"
  >
    <div class="device-card-header">
      <h3>Device Name: {{ device.name || "No Device Name" }}</h3>
      <Chevron
        :isOpen="!!(selectedDevice && selectedDevice.id === device.id)"
      />
    </div>
    <p>Device ID: {{ device.id }}</p>
    <DeviceDetail
      v-if="selectedDevice && selectedDevice.id === device.id"
      :device="selectedDevice"
    />
  </div>
</template>

<style scoped lang="scss">
@use "./DeviceItem.scss";
</style>
