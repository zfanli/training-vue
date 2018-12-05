import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import PageNotFound from './views/PageNotFound.vue'
import PostList from './views/PostList.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: PostList,
    },
    {
      path: '/posts/:id',
      component: () =>
        import(/* webpackChunkName: "post-viewer" */ './views/PostViewer.vue'),
      props: true,
      beforeEnter(to, from, next) {
        const id = to.params.id
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
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})
