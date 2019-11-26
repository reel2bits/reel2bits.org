<template>
  <div id="app">
    <Navigation />
    <router-view />
    <div class="container-fluid bg-dark text-center py-3 my-0">
      <p class="text-white my-0 py-0" v-translate translate-context="Footer">
        © Copyright 2016-2019, reel2bits maintainers and contributors.
      </p>
    </div>
  </div>
</template>

<style lang="scss" src="./App.scss"></style>

<script>
import Navigation from "./components/Navigation.vue";

export default {
  name: "app",
  components: {
    Navigation
  }
};
</script>
