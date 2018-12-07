import Vue from 'vue';
import VueRouter from 'vue-router';
import PageNotFound from './components/PageNotFound.vue';
import store from './store';
import ListPosts from './views/ListPosts.vue';

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: ListPosts,
    },
    {
      path: '/posts/:id',
      component: () =>
        import(/* webpackChunkName: "viewer-post" */ './views/ViewerPost.vue'),
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
