<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>To do list</h3>
    <ul class="list-disc ml-5">
      <li>-+ css setup - some ui components created with tailwind</li>
      <li>+ data structure - in store [ users, temats, conversations ]</li>
      <li>+ adding/removing themats</li>
      <li>adding/removing conversation</li>
      <li>finising taches - mobile menu</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
