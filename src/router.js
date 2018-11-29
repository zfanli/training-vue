import Vue from 'vue';
import VueRouter from 'vue-router';
import PostList from './views/PostList.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
    path: '/',
    component: PostList
  }]
})
