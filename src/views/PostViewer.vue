<template>
  <div>
    <div v-if="hasError">Something went wrong.</div>
    <div class="post" v-else>
      <div class="post-title">{{ post.title }}</div>
      <div class="post-body" v-html="renderMarkdown(post.body)"/>
    </div>
  </div>
</template>

<script>
import { markdown } from '../utils'

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
}
</script>

<style lang="scss" scoped>
</style>
