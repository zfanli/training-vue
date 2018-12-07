<template>
  <nav class="nav">
    <div class="nav-body">
      <router-link class="logo nav-link" to="/">{{ title }}</router-link>
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
      <router-link class="tags nav-link" to="/tags">tags</router-link>
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
      // flag for trigger search box display
      search: false,
      // the 2nd flag for trigger search result panel display
      // for search result panel, `search` is the 1st flag to trigger display
      // and only when mouse enter the area, this flag will be set to true
      // when mouse is out of the area of panel, the flag will be set to false
      // it means trigger for this flag should be apply on mouseenter/mouseout event
      // finally the root reason it exstis is for keep display when search box is gone
      // but user is still watching at the result panel
      searchPanel: false,
    }
  },
  computed: {
    ...mapState(['list']),
    /**
     * Compute result when input was changed.
     */
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

    .nav-link {
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
        margin: 0 0.5rem;
        padding: .5rem;
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
