<template>
  <div class="body post-viewer">
    <div v-if="hasError" class="error">Something went wrong.</div>
    <div class="post" v-else>
      <div class="md-body">
        <div class="post-title">{{ post.title }}</div>
        <div class="post-body" v-html="body"/>
      </div>
      <div class="nav-buttons">
        <div class="previous nav-button">
          <button
            class="nav-button-previous"
            v-if="previous"
            @click="handleNavButtonClick(previous.id)"
          >{{ previous.title }}</button>
          <span class="nav-button-alert" v-else>START</span>
        </div>
        <div class="next nav-button">
          <button
            class="nav-button-next"
            v-if="next"
            @click="handleNavButtonClick(next.id)"
          >{{ next.title }}</button>
          <span class="nav-button-alert" v-else>END</span>
        </div>
      </div>
      <div id="gitalk-container"/>
    </div>
  </div>
</template>

<script>
import { markdown, highlight, gitalk } from '../utils'
import { mapActions } from 'vuex'
import { ACTION_FETCH_POST } from '../actions'

export default {
  props: {
    /**
     * Pass from route, path variable.
     */
    id: String,
  },
  computed: {
    /**
     * Get post from overview of all posts by id.
     */
    post() {
      const id = this.id
      return this.$store.state.list[id]
    },
    /**
     * Check is the post has been fetched successfully
     */
    hasError() {
      if (!this.post) {
        return true
      }
      return false
    },
    /**
     * Parse post body into html.
     */
    body() {
      const body = this.post.body
      return body ? this.renderMarkdown(body) : 'Loading'
    },
    /**
     * The previous post, for navigation.
     */
    previous() {
      return this.getPreviousOrNextPages(-1)
    },
    /**
     * The next post, for navigation.
     */
    next() {
      return this.getPreviousOrNextPages(1)
    },
  },
  methods: {
    /**
     * Handler for navation button onclick.
     */
    handleNavButtonClick(to) {
      this.$router.push(`/posts/${to}`)
    },
    /**
     * Get informations of previous or next page.
     * Return an object contains id and title.
     */
    getPreviousOrNextPages(offset) {
      // if current page is not displayed correctly, do nothing
      if (this.hasError) return null
      // get id list
      const ids = this.$store.getters.listIds
      // find the position of current post
      const index = ids && ids.indexOf(this.id)
      // get previous or next one
      const post = this.$store.state.list[ids[index + offset]]
      // do nothing if nothing is fetched
      if (!post) return null
      // return id and title of fetched post
      return {
        id: post.createdTimestamp,
        title: post.title,
      }
    },
    /**
     * Parser for markdown, parse into html.
     */
    renderMarkdown: markdown,
    ...mapActions({
      fetchPost: ACTION_FETCH_POST,
    }),
  },
  /**
   * Rerender highlight and gitalk when the page updated.
   */
  updated() {
    // This exists because when artilce is initial fetched,
    // the highlight won't be rerendered anymore.
    // This function is for rerendering at that occasions.
    highlight()
    // fetch post body when it does not exist
    if (!this.post.body) {
      const refName = this.post.refName
      const id = this.post.createdTimestamp
      this.fetchPost({ name: refName, id })
    }
    // reload comment by clear comments container
    const id = 'gitalk-container'
    document.getElementById(id).innerHTML = ''
    gitalk().render(id)
  },
  /**
   * Initial rendering.
   */
  mounted() {
    highlight()
    gitalk().render('gitalk-container')
  },
  /**
   * Fetch post if necessary when component is created but not mounted.
   */
  created() {
    // check if post body exists
    if (this.post.body) return
    // If post does not exist, perform fetch action
    // Get correct post body before html is generated
    const refName = this.post.refName
    const id = this.post.createdTimestamp
    this.fetchPost({ name: refName, id })
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/github-markdown.css';
@import '~prismjs/themes/prism-tomorrow.css';

.post-viewer {
  background-color: white;
  margin-top: 2rem;

  @media (max-width: 700px) {
    margin-top: 0;
  }

  .post {
    .post-title {
      font-size: 2.5rem;
      font-weight: 900;
      padding-bottom: 1rem;
    }

    .nav-buttons {
      display: flex;
      border-top: 1px solid #eaecef;
      margin-top: 1rem;

      .nav-button {
        max-width: 50%;
        flex-shrink: 0;
        flex-grow: 1;
        display: flex;

        button {
          border: none;
          background-color: transparent;
          transition: color 0.2s linear;
          cursor: pointer;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          outline: none;
          max-width: 60%;
          padding: 1rem 0;
          font-size: 1rem;

          &:hover {
            color: #999;
          }
        }

        &.previous {
          justify-content: flex-start;
        }

        &.next {
          justify-content: flex-end;
        }

        .nav-button-alert {
          padding: 1rem 0;
          font-size: 1rem;
          color: #999;
        }
      }
    }
  }
}
</style>
