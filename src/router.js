import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import PageNotFound from './views/PageNotFound.vue'
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
      props: true,
      beforeEnter: function(to, from, next) {
        const id = Number(to.params.id)
        const listIds = store.getters.listIds
        if (listIds.indexOf(id) === -1) {
          next('/404')
        } else {
          next()
        }
      },
    },
    // Below is the page not found handler
    {
      path: '/404',
      component: PageNotFound,
    },
    {
      path: '*',
      redirect: '/404',
    },
  ],
})
