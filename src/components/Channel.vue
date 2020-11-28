<template>
  <header class="w-full">
    <!-- message header -->
    {channel.name} {channel.description} {channel.ovner === '0000'?'cen delate':'only desplay'}
  </header>
  <main class="border-t border-b border-green-600 w-full">
    <!-- message list -->
  </main>
  <footer class="w-full">
    <!-- new message -->
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Channel",
  data() {
    return {};
  },
  computed(() => {
    get: () => {
      messages: this.$store.getMessages(this.channel.tag)
    }
  })
  methods: {},
  props: {
    users: Array,
    channel: Object,
  },
});
</script>

<style></style>
