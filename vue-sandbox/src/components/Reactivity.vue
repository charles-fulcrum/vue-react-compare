<template>
  <p>
    <button type="button" @click="count++">count is: {{ count }}</button>
  </p>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const count = ref();
</script>
