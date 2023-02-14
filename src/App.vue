<script setup>
import Header from "./components/common/Header.vue";
import Footer from "./components/common/Footer.vue";
import './assets/css/style.css'

</script>
<template>
  <Header/>
  <router-view></router-view>
  <Footer/>
</template>

<style>
@import "https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css";
header-d {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header-d {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header-d .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
