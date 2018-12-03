<template>
  <div class="post-list body">
    <div class="list-body" v-if="hasPosts">
      <div class="list-item" v-for="item in list" :key="item.title">
        <div class="list-item-timestamp">
          <div>{{ getDate(item.createdTimestamp) }}</div>
          <div>{{ getYear(item.createdTimestamp) }}</div>
        </div>
        <div class="list-item-body">
          <div class="list-item-title" @click="clickHandler(item.createdTimestamp)">{{ item.title }}</div>
          <div class="list-item-tags">
            <span>#</span>
            <router-link v-for="tag in item.tags" :key="tag" :to="`/tags/${tag}`">{{tag}}</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="post-list-load-more" v-if="hasMorePosts">Load More</div>
    <div class="post-list-end" v-else>You have reached the end.</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'PostList',
  computed: {
    ...mapState(['list']),
    ...mapGetters(['hasPosts', 'hasMorePosts']),
  },
  methods: {
    getDate: function(timestamp) {
      if (typeof timestamp !== 'number') return
      const date = new Date(timestamp)
      const day = date.getDate().toString()
      const month = (date.getMonth() + 1).toString()
      return `${day.padStart(2, '0')}/${month.padStart(2, '0')}`
    },
    getYear: function(timestamp) {
      if (typeof timestamp !== 'number') return
      return new Date(timestamp).getFullYear()
    },
    clickHandler: function(to) {
      this.$router.push(`/article/${to}`)
    },
  },
}
</script>

<style lang="scss" scoped>
@keyframes text-gradient {
  0% {
    background-position: 70%;
  }
  100% {
    background-position: 10%;
  }
}

.post-list {
  background-color: transparent;
  flex-shrink: 0;
  flex-grow: 1;
  padding-top: 1rem !important;

  .list-body {
    .list-item {
      background-color: #fff;
      margin: 1rem 0;
      border-radius: 5px;
      transition: all 0.2s linear;
      box-shadow: none;
      display: flex;
      align-items: stretch;

      &:hover {
        box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
        transform: translate3d(0, -2px, 0);

        .list-item-body {
          background-image: linear-gradient(
            141deg,
            #333 40%,
            #f5f5f5 45%,
            #333 50%
          );
          background-size: 400%;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: text-gradient 0.6s linear 1 forwards;
        }
      }

      .list-item-timestamp {
        line-height: 1;
        font-family: 'Courier New', Courier, monospace;
        text-align: right;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
        border-radius: 5px 0 0 5px;
        background-color: #333;
        color: white;
        padding: 0.5rem;
        flex-shrink: 0;
      }

      .list-item-body {
        padding: 0.5rem;
        flex-grow: 1;

        .list-item-title {
          font-size: 1.2rem;
          display: inline;
          cursor: pointer;
          font-family: Georgia, 'Times New Roman', Times, serif;
        }

        .list-item-tags {
          color: #333;
          font-size: 0.8rem;

          a {
            color: #333;
            transition: color 0.2s linear;

            &:not(:last-child)::after {
              content: ',';
              padding-right: 0.5rem;
            }

            &:hover {
              color: #999;
            }
          }
        }
      }
    }
  }

  .post-list-load-more,
  .post-list-end {
    margin-top: 2rem;
    text-align: center;
    font-size: 85%;
    color: #333;
    font-family: 'Courier New', Courier, monospace;
  }
}
</style>
