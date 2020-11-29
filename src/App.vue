<template>
  <nav class="fixed top-1 bottom-1 left-1 w-72 border border-gray-200 bg-gray-300 overflow-hidden">
    <Sidebar :users="this.$store.state.users" :channels="this.$store.state.channels" v-model:active="activeChannel">
      <h3 class="text-lg text-bold">Sunraise inc.</h3>
      <h4 class="text-normal">John doe</h4>
    </Sidebar>
  </nav>
  <div class="ml-72 w-auto h-full">
    <Channel :class="{ hidden: activeChannel == '' }" :active="activeChannel" />
    <HelloWorld :class="{ hidden: activeChannel !== '' }" msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Sidebar from "./components/Sidebar.vue";
import Channel from "./components/Channel.vue";

import UserModel from "@/store/models/UserModel";
import ChannelModel from "@/store/models/ChannelModel";

export default defineComponent({
  name: "App",
  data() {
    return {
      activeChannel: "",
      channel: {},
    };
  },
  components: {
    HelloWorld,
    Sidebar,
    Channel,
  },
  methods: {},
  mounted() {
    ["Lisa", "Zoe", "Harry", "Lee"]
      .filter((name) => {
        return this.$store.getters.getUserByName(name) == undefined;
      })
      .map((item) => {
        const user = new UserModel();
        user.tag = item.toLowerCase();
        user.name = item;
        user.avatar = user.avatar.replace("/avatar.", "/" + user.tag + ".");
        user.isActive = 1;
        this.$store.commit("addUser", user);
      });
    ["annausments", "argitucture", "enginiring", "music"]
      .filter((name) => {
        return this.$store.getters.getChannelByName(name) == undefined;
      })
      .map((item, id) => {
        const channel = new ChannelModel();
        channel.name = item;
        channel.tag = ("0000" + id).substring(-4);
        this.$store.commit("addChannel", channel);
      });
  },
});
</script>

<style></style>
