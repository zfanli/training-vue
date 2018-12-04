<template>
  <div class="body post-viewer">
    <div v-if="hasError" class="error">Something went wrong.</div>
    <div class="post" v-else>
      <div class="md-body">
        <div class="post-title">{{ post.title }}</div>
        <div class="post-body" v-html="article"/>
      </div>
      <div id="gitalk-container"/>
    </div>
  </div>
</template>

<script>
import { markdown, highlight, gitalk } from '../utils'
import { mapActions } from 'vuex'
import { ACTION_FETCH_ARTICLE } from '../actions'

export default {
  props: {
    id: String,
  },
  computed: {
    post() {
      const id = this.id
      const post = this.$store.getters.listArray.filter(function(p) {
        return String(p.createdTimestamp) === id
      })
      return post[0]
    },
    // for check url changed unexpectedly
    hasError() {
      if (!this.post) {
        return true
      }
      return false
    },
    article() {
      const article = this.post.article
      return article ? this.renderMarkdown(article) : 'Loading'
    },
  },
  methods: {
    renderMarkdown: markdown,
    ...mapActions([ACTION_FETCH_ARTICLE]),
  },
  // updated: function() {
  //   highlight()
  //   gitalk().render('gitalk-container')
  // },
  mounted: function() {
    highlight()
    gitalk().render('gitalk-container')
  },
  created() {
    // check if article exists then do nothing
    if (this.post.article) return
    // If article does not exist, perform fetch action
    // Get correct article before html is generated
    const refName = this.post.refName
    const id = this.post.createdTimestamp
    this[ACTION_FETCH_ARTICLE]({ name: refName, id })
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
  }
}
</style>
