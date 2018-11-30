<template>
  <div class="post-list">
    <div class="list-body" v-if="hasPosts">
      <div class="list-item" v-for="item in list" :key="item.title">
        <div class="list-item-timestamp">
          <div>{{ getDate(item.lastUpdatedTime) }}</div>
          <div>{{ getYear(item.lastUpdatedTime) }}</div>
        </div>
        <div class="list-item-body">
          <div class="list-item-title" @click="clickHandler(item.title)">{{ item.title }}</div>
          <div class="list-item-tags">
            <span>#</span>
            <router-link v-for="tag in item.tags" :key="tag" :to="`/tags/${tag}`">{{tag}}</router-link>
          </div>
        </div>
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
@import '../styles/common.scss';

@keyframes text-gradient {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

.post-list {
  background-color: transparent;
  flex-shrink: 0;
  flex-grow: 1;

  .list-body {
    @media (min-width: $max-screen-width) {
      width: 700px;
      margin: 0 auto;
    }

    .list-item {
      background-color: #fff;
      margin: 1rem 0.5rem;
      border-radius: 5px;
      transition: all 0.2s linear;
      box-shadow: none;
      display: flex;
      align-items: stretch;

      &:hover {
        box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
        transform: translate3d(0, -2px, 0);

        // .list-item-body {
        //   background-image: linear-gradient(
        //     141deg,
        //     #333 0%,
        //     #f5f5f5 5%,
        //     #333 10%
        //   );
        //   background-size: 400%;
        //   background-clip: text;
        //   -webkit-background-clip: text;
        //   color: transparent;
        //   animation: text-gradient 0.9s linear 1 forwards;
        // }
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
        display: flex;
        flex-direction: column;
        padding: 0.5rem;
        flex-grow: 1;

        .list-item-title {
          font-size: 1.2rem;
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
}
</style>
