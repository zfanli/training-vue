<template>
  <div>{{title}}</div>
</template>
<script>
export default {
  computed: {
    title: function() {
      return this.$route.params.title
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
