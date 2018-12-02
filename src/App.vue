<template>
  <div class="app">
    <navigation class="header"/>
    <router-view/>
    <page-footer/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import PageFooter from './components/PageFooter.vue'

export default {
  name: 'app',
  components: {
    Navigation,
    PageFooter,
  },
}
</script>

<style lang="scss">
@import './styles/common.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
}
</style>
