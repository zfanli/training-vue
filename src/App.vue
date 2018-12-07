<template>
  <div class="app">
    <page-navigation/>
    <router-view/>
    <page-footer/>
  </div>
</template>

<script>
import PageNavigation from './components/PageNavigation.vue'
import PageFooter from './components/PageFooter.vue'

export default {
  name: 'app',
  components: {
    PageNavigation,
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
