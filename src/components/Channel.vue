<template>
  <section :class="this.class">
    <header class="w-full">
      <ChannelHeader :title="channel.name" :description="channel.description" :isDeleteble="channel.ovner === '0000'"> </ChannelHeader>
    </header>
    <main class="border-t border-b border-green-600 w-full">
      <!-- message list -->
    </main>
    <footer class="w-full">
      <!-- new message -->
    </footer>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ChannelHeader from "./channel/ChannelHeader.vue";

export default defineComponent({
  name: "Channel",
  data() {
    return {};
  },
  components: {
    ChannelHeader,
  },
  methods: {},
  props: {
    users: Array,
    channel: Object,
    class: String,
  },
});
</script>

<style></style>
