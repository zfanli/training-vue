<template>
  <div class="tags-list body">
    <div v-for="tag in tagsList" :key="tag">{{ tag }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['tagsList']),
  },
}
</script>

<style lang="scss" scoped>
</style>
