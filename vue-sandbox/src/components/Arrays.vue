<template>
  <span>
    <button @click="arrayAdd">Add</button>
    <button @click="arrayDelete">Delete</button>
    <button @click="arrayChangeFirst">Change First</button>
  </span>
  <pre>{{ JSON.stringify(array, null, 2) }}</pre>

  <!-- <input v-for="(item, i) of texts" :key="i" v-model="texts[i]" type="text" >
  <pre>{{ JSON.stringify(texts, null, 2) }}</pre> -->
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const array = reactive<{ name: string }[]>([]);
const arrayAdd = () => array.push({ name: 'new' });
const arrayDelete = () => array.pop();
const arrayChangeFirst = () => (array[0].name = 'newer');

// const texts = reactive(new Array(10).fill(''));
</script>
