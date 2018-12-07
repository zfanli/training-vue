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
              @click="searchTrigger"
              key="search-label"
            >search</div>
            <input
              class="search-box search-tansition"
              type="text"
              v-else
              v-focus
              v-model="input"
              placeholder="Search"
              @blur="searchTrigger"
              key="search-input"
            >
          </transition>
        </keep-alive>
        <ul
          class="search-result"
          v-show="search || searchPanel"
          @mouseleave="searchPanelTrigger(false)"
          @mouseenter="searchPanelTrigger(true)"
        >
          <li
            class="search-result-item"
            v-for="post in searchResult"
            :key="post.createdTimestamp"
            @click="navigate(post.createdTimestamp)"
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
      searchPanel: false,
    }
  },
  computed: {
    ...mapState(['list']),
    searchResult() {
      const i = this.input
      if (i) {
        const posts = Object.values(this.list)
        return posts.filter(p => new RegExp(i).test(p.title))
      }
      return false
    },
  },
  methods: {
    /**
     * Navigate to post viewer.
     */
    navigate(to) {
      this.$router.push(`/posts/${to}`)
      this.searchPanel = false
    },
    /**
     * Trigger search input box display or not.
     */
    searchTrigger() {
      this.search = !this.search
    },
    /**
     * Trigger search result panel.
     */
    searchPanelTrigger(b) {
      this.searchPanel = b
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
      position: relative;

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
        transform: translate3d(-5rem, 0.5rem, 0);
        background-color: white;
        display: block;
        width: 15rem;
        z-index: 99;
        padding: 0;
        box-shadow: 0 0 15px #999;
        max-height: 60vh;
        overflow-y: scroll;
        border-radius: 5px;

        .search-result-item {
          font-family: Georgia, 'Times New Roman', Times, serif;
          padding: 0 0.5rem;
          list-style: none;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          cursor: pointer;
          background-color: white;

          &:hover {
            color: white;
            background-color: #333;
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
