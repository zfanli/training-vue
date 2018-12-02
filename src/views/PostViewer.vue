<template>
  <div class="body post-viewer">
    <div v-if="hasError" class="error">Something went wrong.</div>
    <div class="post" v-else>
      <div class="markdown-body">
        <div class="post-title">{{ post.title }}</div>
        <div class="post-body" v-html="renderMarkdown(post.body)"/>
      </div>
      <div id="gitalk-container"/>
    </div>
  </div>
</template>

<script>
import { markdown, highlight, gitalk } from '../utils'

export default {
  props: {
    id: String,
  },
  computed: {
    post: function() {
      const id = this.id
      const post = this.$store.state.list.filter(function(p) {
        return String(p.lastUpdatedTime) === id
      })
      return post[0]
    },
    // for check url changed unexpectedly
    hasError: function() {
      if (!this.post) {
        return true
      }
      return false
    },
  },
  methods: {
    renderMarkdown: markdown,
  },
  updated: function() {
    highlight()
    gitalk.render('gitalk-container')
  },
  mounted: function() {
    highlight()
    gitalk.render('gitalk-container')
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
      font-weight: bold;
      padding-bottom: 1rem;
    }
  }
}
</style>
