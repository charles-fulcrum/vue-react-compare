<template>
  <h3>B</h3>
  <h4>{{ store.count }}</h4>
  <button @click="add">Add</button>
</template>

<script setup lang="ts">
import { store } from '../../store/store';

const add = () => store.count++;
</script>
