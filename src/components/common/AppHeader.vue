<template>
  <nav
      class="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-5"
  >
    <router-link class="md:hidden" to="/">Home</router-link>
    <router-link
        v-for="item in store.list"
        :key="item.to"
        class="mx-2 hidden md:inline-block"
        :to="item.to"
    >{{ item.title }}</router-link
    >

  </nav>
</template>

<script setup>
import {reactive} from "vue";
const store = reactive({
  list: [
    { title: "Calendar", to: "/calendar" },
    { title: "User Crud", to: "/user-crud" },
  ]
});
</script>
<style></style>