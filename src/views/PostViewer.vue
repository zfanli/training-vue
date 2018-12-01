<template>
  <div>
    <div v-if="hasError">Something went wrong.</div>
    <div v-else>{{post.lastUpdatedTime}}</div>
  </div>
</template>
<script>
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
}
</script>
<style lang="scss" scoped>
</style>
