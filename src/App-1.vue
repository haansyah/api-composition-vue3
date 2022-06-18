<template>
  <!-- <div>Composition API {{ number }}</div> -->
  <div>{{ state.title }}</div>
  <div>{{ state.body }}</div>
  <div>{{ state.users.id }}</div>
  <div>Ini ref {{ withRef }}</div>
</template>

<script>
import { reactive, ref } from "vue";
// import { ref } from "vue";

export default {
  setup() {
    const state = reactive({
      users: {
        id: "9201839",
        number: 0,
      },
      form: {},
      title: "the first title.",
      body: "the first body.",
    });

    const withRef = ref("WADAW");

    setTimeout(() => {
      state.title = "The Second title";
      withRef.value = "REF";
    }, 2000);

    return { state, withRef };
  },

  // COMPOSITION API 1.2
  // setup() {
  //   const number = ref(0);

  //   setInterval(() => {
  //     number.value++;
  //   }, 1000);

  //   return {
  //     number,
  //   };
  // },

  // BIASA
  // data() {
  //   return {
  //     number: 0,
  //   };
  // },

  // mounted() {
  //   setInterval(() => {
  //     this.number++;
  //   }, 1000);
  // },

  // COMPOSITION API 1.1
  // setup() {
  //   const name = ref("Ari");
  //   setTimeout(() => {
  //     name.value = "Ayu";
  //   }, 1000);
  //   return {
  //     name,
  //   };
  // },
};
</script>

<style></style>
