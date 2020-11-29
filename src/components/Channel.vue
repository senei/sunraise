<template>
  <section :class="this.class">
    <header class="w-full">
      <ChannelHeader title="channel.name" description="channel.description" isDeleteble="channel.ovner === '0000'"> </ChannelHeader>
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
    return {
      channel: {},
    };
  },
  components: {
    ChannelHeader,
  },
  watch: {
    channel: (active) => {
      //ERRROR: console.log(this.$store.getters.getChannel(active));
      //TODO: get curent channel and pass it to props :()
      return {};
    },
  },
  methods: {},
  props: {
    active: String,
    class: String,
  },
});
</script>

<style></style>
