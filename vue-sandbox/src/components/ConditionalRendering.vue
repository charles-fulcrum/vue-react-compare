<template>
  <div v-if="shown">
    Hello
  </div>
  <div v-else>
    asdf
  </div>
  <br>
  <label for="show">
    <input v-model="shown" id="show" type="checkbox">
    Show me
  </label>
  <br>
  <button @click="show">Show me with callback</button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const shown = ref(false);
const show = () => shown.value = !shown.value;
</script>
