<template>
  <div id="app">
    <!--<navigation />-->
    <router-view />
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
