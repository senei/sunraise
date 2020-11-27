<template>
<nav class="absolute top-2 bottom-2 left-2 p-4 w-64 bg-gray-300 grid grid-flow-col">
    <div>
        <h3 class="text-xl">Users on-line : </h3>
        <ul>
            <li> user 1 </li>
            <li> user 2 </li>
            <li> user 3 </li>
        </ul>
    </div>
    <div>
        <h3 class="text-xl">Conversations : </h3>
        <ul>
            <li> conversation 1 </li>
            <li> conversation 2 </li>
            <li> conversation 3 </li>
        </ul>
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
