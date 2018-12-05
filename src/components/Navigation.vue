<template>
  <nav class="nav">
    <div class="nav-body">
      <router-link class="logo" to="/">{{ title }}</router-link>
      <div class="nav-search">
        <keep-alive>
          <transition name="s" mode="out-in">
            <div
              class="search-label search-tansition"
              v-if="!search"
              @click="search = !search"
              key="search-label"
            >search</div>
            <input
              class="search-box search-tansition"
              type="text"
              v-else
              v-focus
              v-model="input"
              placeholder="Search"
              @blur="search = !search"
              key="search-input"
            >
          </transition>
        </keep-alive>
        <ul class="search-result" v-if="searchResult">
          <li
            class="search-result-item"
            v-for="post in searchResult"
            :key="post.createdTimestamp"
          >{{ post.title }}</li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Navigation',
  data: function() {
    return {
      title: this.$store.state.title,
      input: '',
      search: false,
    }
  },
  computed: {
    ...mapState(['list']),
    searchResult() {
      const i = this.input
      if (i && this.search) {
        const posts = Object.values(this.list)
        return posts.filter(p => new RegExp(i).test(p.title))
      }
      return false
    },
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus()
      },
    },
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
      flex-shrink: 0;
    }

    .nav-search {
      margin-left: auto;
      font-family: inherit;
      align-self: flex-end;

      .search-label {
        color: white;
        width: 10rem;
        transition: all 0.1s linear;
        text-align: center;
      }
      .search-box {
        width: 10rem;
        border: none;
        transition: all 0.1s linear;
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
      .search-result {
        position: absolute;
        background-color: white;
        display: block;
        top: 45px;
        right: 50px;
        width: 15rem;
        padding: 0 0.5rem;

        .search-result-item {
          list-style: none;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;

          &:not(:last-child) {
            border-bottom: 1px solid #333;
          }
        }
      }
    }
  }
}
</style>
<style lang="scss">
.search-tansition.s-enter {
  transform: translate3d(10%, 0, 0);
  opacity: 0;
}
.search-tansition.s-enter-to {
  transform: translate3d(0, 0, 0);
  opacity: 1;
}
.search-tansition.s-leave {
  transform: translate3d(0, 0, 0);
  opacity: 1;
}
.search-tansition.s-leave-to {
  transform: translate3d(-10%, 0, 0);
  opacity: 0;
}
</style>
