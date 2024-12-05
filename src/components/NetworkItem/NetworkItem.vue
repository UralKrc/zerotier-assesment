<script setup lang="ts">
import { defineEmits, defineProps } from "vue";
import { Device } from "../../types/Device";
import Chevron from "../Chevron/Chevron.vue";
import DeviceItem from "../DeviceItem/DeviceItem.vue";

defineProps<{
  network: { id: string; devices: Device[] };
  selectedNetwork: { id: string; devices: Device[] } | null;
  selectedDevice: Device | null;
}>();

const emit = defineEmits<{
  (e: "networkSelected", network: { id: string; devices: Device[] }): void;
  (e: "deviceSelected", device: Device): void;
}>();

const selectNetwork = (network: { id: string; devices: Device[] }): void => {
  emit("networkSelected", network);
};

const selectDevice = (device: Device): void => {
  emit("deviceSelected", device);
};
</script>

<template>
  <div class="network-item" @click="selectNetwork(network)">
    <div class="network-item-header">
      <div class="network-id">
        <h2>Network ID: {{ network.id }}</h2>
        <div class="device-count">{{ network.devices.length }}</div>
      </div>
      <Chevron
        :isOpen="!!(selectedNetwork && selectedNetwork.id === network.id)"
      />
    </div>
    <div v-if="selectedNetwork && selectedNetwork.id === network.id">
      <div v-if="network.devices.length > 0">
        <DeviceItem
          v-for="device in network.devices"
          :key="device.id"
          :device="device"
          :selected-device="selectedDevice"
          @deviceSelected="selectDevice"
        />
      </div>
      <p v-else class="no-devices">No devices available for this network</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "./NetworkItem.scss";
</style>
