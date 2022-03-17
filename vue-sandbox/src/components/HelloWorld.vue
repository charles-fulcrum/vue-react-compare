<template>
  <h1>
    {{ msg }}
  </h1>
  <Reactivity />
  <br>
  <TwoWayBinding />
  <ConditionalRendering />
  <br>
  <br>
  <Arrays />
  <br>
  <br>
  <A />
  <B />
</template>

<script setup lang="ts">
import Reactivity from './Reactivity.vue';
import TwoWayBinding from './TwoWayBinding.vue';
import ConditionalRendering from './ConditionalRendering.vue';
import Arrays from './Arrays.vue';
import A from './SimpleStateManagement/A.vue';
import B from './SimpleStateManagement/B.vue';

defineProps({
  msg: {
    type: String,
    default: '',
  },
});

</script>

<style scoped>
code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}

button {
  font-size: calc(10px + 2vmin);
}
</style>
