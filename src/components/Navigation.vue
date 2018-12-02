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
.nav {
  display: flex;
  height: 45px;
  line-height: 45px;
  background-color: #333;
  width: 100%;
  flex-shrink: 0;

  .nav-body {
    font-family: 'Courier New', Courier, monospace;
    flex-grow: 1;

    .logo {
      color: white;
      cursor: pointer;
      text-decoration: none;
      text-transform: lowercase;
    }
  }
}
</style>
