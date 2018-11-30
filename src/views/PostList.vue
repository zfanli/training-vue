<template>
  <div class="post-list">
    <div class="title">The list</div>
    <div class="list-body" v-if="hasPosts">
      <div class="list-item" v-for="item in postList" :key="item.title">
        <div class="list-item-title">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostList',
  props: {
    postList: {
      type: Array,
      default: function() {
        return []
      },
    },
  },
  computed: {
    hasPosts: function() {
      return this.postList.length !== 0
    },
  },
}
</script>

<style lang="scss" scoped>
.post-list {
  background-color: transparent;
  flex-shrink: 0;
  flex-grow: 1;

  .title {
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    margin: 1rem 0;
  }

  .list-body {
    @media (min-width: 1000px) {
      width: 700px;
      margin: 0 auto;
    }

    .list-item {
      background-color: #fff;
      margin: 1rem 0.5rem;
      padding: 0.5rem;
      border-radius: 5px;
    }
  }
}
</style>
