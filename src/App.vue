<template>
  <NetworkList />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NetworkList from "./components/NetworkList/NetworkList.vue";

export default defineComponent({
  name: "App",
  components: {
    NetworkList,
  },
});
</script>
