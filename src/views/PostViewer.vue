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
      return post[0]
    },
  },
}
</script>
<style lang="scss" scoped>
</style>
