<template>
  <div style="flex">
    <div>
      <h1>{{ this.title }}</h1>
      <h3>{{ this.description }}{{ this.isDeleteble }}</h3>
    </div>
    <button class="w-10 h-10 roundedrounded-full font-mono font-semibold border-gray-300 text-gray-300 hover:text-red-400 hover:border-gray-300">X</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChannelHeader",
  data() {
    return {};
  },

  methods: {},
  props: {
    title: String,
    description: String,
    isDeleteble: Boolean,
  },
});
</script>

<style></style>
