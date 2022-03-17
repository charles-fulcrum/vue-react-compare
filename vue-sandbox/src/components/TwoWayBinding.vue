<template>
  <input v-model="text" type="text" />
  <h4>{{ text }}</h4>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const text = ref('');
</script>
