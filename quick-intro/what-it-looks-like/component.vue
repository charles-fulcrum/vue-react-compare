<template>
  <div class="some-styling">Count: {{ count }}</div>
  <button @click="add">Add</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const count = ref(0);
const add = () => count.value++;
</script>

<style scoped lang="scss">
.some-styling {
  font-size: large;
  font-weight: 400;
  color: #4caf50;
}
</style>
