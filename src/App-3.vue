<template>
  <button @click="increment">+</button>
  <div>{{ number }}</div>
  <button @click="decrement"></button>
</template>

<script>
import { ref } from "@vue/reactivity";
import useCounter from "./helpers/counter";
export default {
  setup() {
    const number = ref(0);

    const { increment, decrement } = useCounter(number);

    return {
      number,
      increment,
      decrement,
    };
  },
};
</script>

<style></style>
