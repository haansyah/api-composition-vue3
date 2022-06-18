<template>
  <div>Nama ku adalah {{ username }}</div>
  <div>Umur ku {{ age }}</div>
  <div>status loading {{ loading }}</div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
export default {
  setup() {
    const state = reactive({
      username: "Arikun",
      age: 21,
      loading: false,
    });

    setTimeout(() => {
      (state.username = "Berubah"), (state.age = 25), (state.loading = true);
    }, 2000);

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style></style>
