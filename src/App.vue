<template>
  <div class="app">
    <navigation class="header" title="richard zg"/>
    <router-view/>
    <page-footer/>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import PageFooter from "./components/PageFooter.vue";
import data from "./data";

export default {
  name: "app",
  components: {
    Navigation,
    PageFooter
  },
  data: function() {
    return {
      list: data.list
    };
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  background-color: #eee;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
}
</style>
