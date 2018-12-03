import Vue from 'vue'
import Vuex from 'vuex'
import data from './data'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: data.list,
    title: data.title,
    size: 15,
  },
  getters: {
    listIds: state => state.list.map(o => o.createdTimestamp),
    length: state => (state.list ? state.list.length : 0),
    hasPosts: (_, getters) => getters.length > 0,
    hasMorePosts: (state, getters) => state.size < getters.length,
  },
  mutations: {},
  actions: {},
})
