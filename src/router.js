import Vue from 'vue'
import VueRouter from 'vue-router'
import PostList from './views/PostList.vue'
import PostViewer from './views/PostViewer.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: PostList,
    },
    {
      path: '/article/:id',
      component: PostViewer,
      props: true
    }
  ],
})
