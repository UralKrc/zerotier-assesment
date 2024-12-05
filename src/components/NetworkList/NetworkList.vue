<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getNetworkMembers, getNetworks } from "../../services/zeroTierService";
import { Device } from "../../types/Device";
import Loading from "../Loading/Loading.vue";
import NetworkItem from "../NetworkItem/NetworkItem.vue";

const networks = ref<{ id: string; devices: Device[] }[]>([]);
const selectedNetwork = ref<{ id: string; devices: Device[] } | null>(null);
const selectedDevice = ref<Device | null>(null);
const loading = ref<boolean>(true);

const fetchNetworks = async (): Promise<void> => {
  loading.value = true;
  const networkList = await getNetworks();
  const allNetworks = [];

  for (const network of networkList) {
    const members = await getNetworkMembers(network.id);

    allNetworks.push({ id: network.id, devices: members });
  }

  networks.value = allNetworks;
  loading.value = false;
};

const selectNetwork = (network: { id: string; devices: Device[] }): void => {
  if (selectedNetwork.value && selectedNetwork.value.id === network.id) {
    selectedNetwork.value = null;
  } else {
    selectedNetwork.value = network;
  }
  selectedDevice.value = null;
};

const selectDevice = (device: Device): void => {
  if (selectedDevice.value && selectedDevice.value.id === device.id) {
    selectedDevice.value = null;
  } else {
    selectedDevice.value = device;
  }
};

onMounted(fetchNetworks);
</script>

<template>
  <div class="network-list">
    <Loading v-if="loading" />
    <div v-else>
      <h1>Network List</h1>
      <NetworkItem
        v-for="network in networks"
        :key="network.id"
        :network="network"
        :selected-network="selectedNetwork"
        :selected-device="selectedDevice"
        @networkSelected="selectNetwork"
        @deviceSelected="selectDevice"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "./NetworkList.scss";
</style>
