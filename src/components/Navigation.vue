<template>
  <nav class="nav">
    <div class="nav-body">
      <router-link class="logo" to="/">{{ title }}</router-link>
      <div class="nav-search">
        <transition-group name="fade" mode="out-in">
          <div
            class="search-label"
            v-if="!search"
            @click="search = !search"
            key="search-label"
          >search</div>
          <input
            class="search-box"
            type="text"
            v-else
            v-model="input"
            placeholder="Search"
            @blur="search = !search"
            key="search-input"
          >
        </transition-group>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data: function() {
    return {
      title: this.$store.state.title,
      input: '',
      search: false,
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
    display: flex;

    .logo {
      color: white;
      cursor: pointer;
      text-decoration: none;
      text-transform: lowercase;
    }

    .nav-search {
      margin-left: auto;
      font-family: inherit;

      .search-label {
        color: white;
      }
      .search-box {
        border: none;
        transition: all 0.2s linear;
        padding: 0.5rem;
        outline: none;
        border-radius: 5px;
        text-align: center;
        background-color: white;
        color: #333;

        &::placeholder {
          color: inherit;
        }
      }
    }
  }
}
</style>
