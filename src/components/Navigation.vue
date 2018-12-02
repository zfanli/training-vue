<template>
  <nav class="nav">
    <div class="nav-body">
      <router-link class="logo" to="/">{{ title }}</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data: function() {
    return {
      title: this.$store.state.title,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/constants.scss';

.nav {
  display: flex;
  height: 45px;
  line-height: 45px;
  background-color: #333;
  width: 100%;
  flex-shrink: 0;
  margin-bottom: 1.5rem;

  .nav-body {
    font-family: 'Courier New', Courier, monospace;

    @media (min-width: $max-screen-width) {
      width: 700px;
      margin: 0 auto;
    }

    .logo {
      color: white;
      margin: 0 0.5rem;
      cursor: pointer;
      text-decoration: none;
      text-transform: lowercase;
    }
  }
}
</style>
