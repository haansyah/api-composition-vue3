<template>
  <div>Posts Ea</div>
  <ul>
    <li v-for="post in posts" :key="post.id">
      {{ post.id }} {{ post.title }} <br />
      {{ post.body }}
    </li>
  </ul>
</template>

<script>
import axios from "axios";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    const posts = ref([]);

    const getPosts = async () => {
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      posts.value = response.data.slice(0, 10);
    };
    onMounted(getPosts);
    return { posts };
  },

  // data() {
  //   return {
  //     post: [],
  //   };
  // },

  // mounted() {
  //   this.getPosts();
  // },

  // methods: {
  //   async getPosts() {
  //     let response = await axios.get(
  //       "https://jsonplaceholder.typicode.com/posts"
  //     );
  //     console.log((this.posts = response.data.slice(1, 10)));
  //   },
  // },
};
</script>

<style></style>
