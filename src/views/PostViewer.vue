<template>
  <div>{{post.lastUpdatedTime}}</div>
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
      if (post.length !== 1) {
        this.$router.push('/404')
        return
      }
      return post[0]
    },
  },
}
</script>
<style lang="scss" scoped>
</style>
