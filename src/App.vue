<template>
<nav class="absolute top-1 bottom-1 left-1 w-72 border border-gray-200 bg-gray-300 overflow-hidden">
    <div class="border-b border-gray-200 p-4 h-20">
        <h3 class="text-lg text-bold">Sunraise inc.</h3>
        <h4 class="text-normal">John doe</h4>
    </div>
    <div class="m-4 mr-0 absolute top-20 bottom-0 left-0 -right-4 pr-8 overflow-scroll">
        <ul>
            <li> 
                Users 
                <ul class="ml-2">
                    <li v-for="user in this.$store.state.users" :key="user.tag">{{user.name}}</li>
                </ul>
            </li>
            <li class="mt-2"> 
                Channels 
                <button style="line-height: 0;" class="w-6 h-6 float-right border-2 border-gray-light border-double rounded-full" @click="chengeInputDisplay">+</button>
                <div class="m-1" :class="{ 'hidden': this.$store.state.newChanelActive }">
                    <input class="w-full bg-gray-400 text-white p-1" v-model='this.$store.state.newChanelName' placeholder=" add new channel " type="text" @keyup.enter="submitName"/>
                </div>
                <ul class="ml-2 overflow-hidden ">
                    
                    <li v-for="channel in this.$store.state.channels" :key="channel.tag"># {{channel.name}}</li>
                </ul>
            </li>
        </ul>
    </div>
</nav>
<div class="ml-72 w-auto h-full">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import UserModel from "@/store/models/UserModel";
import ChannelModel from "@/store/models/ChannelModel";

export default defineComponent({
    name: 'App',
    components: {
        HelloWorld
    },
    methods: {
        chengeInputDisplay() {
            this.$store.commit('inputDisplayChange');
        },
        submitName(){
            const channel = new ChannelModel();
            channel.name = this.$store.state.newChanelName;
            channel.tag = ("0000"+this.$store.state.channels.length).substring(-4);
            this.$store.commit('addChannel', channel);
        }
    },
    mounted() {
        ['Lisa', 'Zoe', 'Harry', 'Lee'].filter((name)=>{
            return this.$store.getters.getUserByName(name)==undefined;
        }).map((item)=> {
            const user = new UserModel();
            user.tag = item.toLowerCase();
            user.name = item;
            user.avatar = user.avatar.replace('/avatar.', '/' + user.tag + '.');
            user.isActive = 1;
            this.$store.commit('addUser', user);
        });
        ['annausments','argitucture','enginiring','music'].filter((name)=>{
            return this.$store.getters.getChannelByName(name)==undefined;
        }).map((item, id)=> {
            const channel = new ChannelModel();
            channel.name = item;
            channel.tag = ("0000"+id).substring(-4);
            this.$store.commit('addChannel', channel);
        });
    }
});
</script>

<style>

</style>
