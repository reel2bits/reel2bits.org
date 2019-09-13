<template>
  <div id="app">
    <navigation />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" src="./App.scss"></style>

<script>
import Navigation from "./components/Navigation";

export default {
  name: "app",
  components: {
    Navigation
  }
};
</script>
