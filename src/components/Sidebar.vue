<template>
  <div class="border-b border-gray-200 p-4 h-20"><slot></slot></div>
  <div class="m-4 mr-0 absolute top-20 bottom-0 left-0 -right-4 pr-8 overflow-scroll">
    <ul>
      <li>
        Users
        <ul class="ml-2">
          <li v-for="user in this.users" :key="user.tag">{{ user.name }}</li>
        </ul>
      </li>
      <li class="mt-2">
        Channels
        <button style="line-height: 0" class="w-6 h-6 float-right border-2 border-gray-light border-double rounded-full" @click="chengeInputDisplay">+</button>
        <div class="m-1" :class="{ hidden: !this.inputActive }">
          <input class="w-full bg-gray-400 text-white p-1" v-model="this.inputValue" placeholder=" add new channel " type="text" @keyup.enter="submitName" />
        </div>
        <ul class="ml-2 overflow-hidden">
          <li v-for="channel in this.channels" :key="channel.tag" @click="swichActive(channel.tag)" :class="{ active: channel.tag == this.active }"># {{ channel.name }}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, $emit } from "vue";
import ChannelModel from "@/store/models/ChannelModel";

export default defineComponent({
  name: "Sidebar",
  emits: ["update:active"],
  data() {
    return {
      active: "",
      inputValue: "",
      inputActive: false,
    };
  },
  methods: {
    swichActive(key) {
      console.log(key);
      this.active = key;
      // $emit("update:active", key);
    },
    chengeInputDisplay() {
      // this.$store.commit("inputDisplayChange");
      this.inputActive = !this.inputActive;
    },
    submitName() {
      const channel = new ChannelModel();
      channel.name = this.$data.inputValue;
      channel.tag = ("0000" + this.$props.channelsLength).substring(-4);
      this.$store.commit("addChannel", channel);
    },
  },
  props: {
    users: Array,
    channels: Array,
  },
});
</script>

<style></style>
