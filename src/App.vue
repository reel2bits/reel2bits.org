<template>
  <div id="app">
    <Navigation />
    <router-view />
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
