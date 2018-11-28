<template>
  <div id="app">
    <navigation class="header" title="Richard Zg"/>
    <post-list class="list" :post-list="list" />
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue"
import PostList from "./components/PostList.vue"

export default {
  name: "app",
  components: {
    Navigation,
    PostList
  },
  data: function () {
    return {
      list: [
        {title: 'Post 1'},
        {title: 'Post 2'},
        {title: 'Post 3'},
        {title: 'Post 4'},
      ]
    }
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
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

  .list {
    flex-shrink: 0;
    flex-grow: 1;
  }
}
</style>
