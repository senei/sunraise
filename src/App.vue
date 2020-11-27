<template>
<nav class="absolute top-2 bottom-2 left-2 p-4 w-64 bg-gray-300 grid grid-flow-row auto-rows-max">
    <div class="h-36">
        <h3 class="text-xl">Users on-line : </h3>
        <ul class="list-disc list-inside">
            <li class="relative block pl-7 h-6"><picture class=" absolute left-0 top-1 inline-block w-5 h-5 overflow-hidden border rounded-full bg-gray-100"><img src="/img/avatar.65d3dbb5.png"></picture> user 1 </li>
            
            <li class="relative block pl-7 h-6"><picture class=" absolute left-0 top-1 inline-block w-5 h-5 overflow-hidden border rounded-full bg-gray-100"><img src="/img/avatar.65d3dbb5.png"></picture> user 2 </li>
            
            <li class="relative block pl-7 h-6"><picture class=" absolute left-0 top-1 inline-block w-5 h-5 overflow-hidden border rounded-full bg-gray-100"><img src="/img/avatar.65d3dbb5.png"></picture> user 3 </li>
        </ul>
    </div>
    <div class="pt-6">
        <h3 class="text-xl">Conversations : </h3>
        <ul class="list-disc list-inside  ">
            <li> conversation 1 </li>
            <li> conversation 2 </li>
            <li> conversation 3 </li>
        </ul>
        <button class="mt-6 ml-auto mr-auto p-2 border-double border-4 border-white">create new</button>  
    </div>
</nav>
<HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
    name: 'App',
    components: {
        HelloWorld
    }
});
</script>

<style>

</style>
