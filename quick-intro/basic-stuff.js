import { useCallback, useEffect, useMemo, useState } from 'react';
import { ref, computed } from 'vue';

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

/* States */

// React
const [reactState, setReactState] = useState();

// Vue
const vueState = ref();

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

/* Derived Values */

// React
const reactMemo = useMemo(() => reactState * 2, [reactState]);

// Vue
const vueComputed = computed(() => vueState.value * 2);

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

/* Callbacks */

// React (sometimes)
const reactCallback = useCallback(() => {
  console.log(reactState * reactMemo);
}, [reactState, reactMemo]);

// Vue
const vueCallback = () => {
  console.log(vueState.value * vueComputed.value)
};

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

/* Side-effects */

// React
useEffect(() => {
  console.log(`The React state change, it's now (${reactState}) and memo ${reactMemo} changed.`);
}, [reactState, reactMemo]);

  // What if we only want to do something when `reactState` changes,
  // but we also need `reactMemo`?
  // Idk. We have to include both as dependencies, otherwise the linter is
  // gonna yell at us about some "exhaustive deps" or something.

// Vue
watch([vueState, vueComputed], () => {
  console.log(`The Vue ref (${vueState.value}) and computed ${vueComputed.value} changed.`);
});

  // But we can do that in Vue.
watch([vueState], () => {
  const product = vueState.value * vueComputed.value;
  console.log(product);
  console.log('This only happens when the `vueRef` changes.');
});

