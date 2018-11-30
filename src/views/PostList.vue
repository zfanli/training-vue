<template>
  <div class="post-list">
    <div class="title">The list</div>
    <div class="list-body" v-if="hasPosts">
      <div class="list-item" v-for="item in list" :key="item.title">
        <div class="list-item-title">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostList',
  data: function() {
    return {
      list: this.$store.state.list,
    }
  },
  computed: {
    hasPosts: function() {
      return this.list.length !== 0
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/common.scss';

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
    @media (min-width: $max-screen-width) {
      width: 700px;
      margin: 0 auto;
    }

    .list-item {
      background-color: #fff;
      margin: 1rem 0.5rem;
      padding: 0.5rem;
      border-radius: 5px;
      transition: all 0.2s linear;
      box-shadow: none;

      &:hover {
        box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
        transform: translate3d(0, -2px, 0);
      }
    }
  }
}
</style>
