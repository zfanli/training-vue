import Vue from 'vue'
import Vuex from 'vuex'
import data from './data'
import { ACTION_FETCH_ARTICLE, SET_ARTICLE } from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: data,
    title: 'richard zg',
    size: 15,
  },
  getters: {
    listIds(state) {
      return Object.keys(state.list)
    },
    listArray(state, getters) {
      return getters.listIds.map(id => state.list[id])
    },
    length(_, getters) {
      return getters.listArray ? getters.listArray.length : 0
    },
    hasPosts(_, getters) {
      return getters.length > 0
    },
    hasMorePosts(state, getters) {
      return state.size < getters.length
    },
  },
  mutations: {
    // Set new article
    [SET_ARTICLE](state, { article, id }) {
      state.list[id].article = article
    },
  },
  actions: {
    // Perform a async action for dynamic import a md file.
    // The name is needed, point to the real file name
    // The id is for identify the post
    [ACTION_FETCH_ARTICLE]({ commit }, { name, id }) {
      // Dynamic import markdown file and set to state.article
      // Notice: MUST minify variable control of import path,
      // because webpack will pack all files that could be imported.
      // For example, the path defined below(`./_posts/${name}.md`)
      // will make webpack to pack all files that match `./_posts/*.md`.
      import(/* webpackMode: "lazy" */ `./_posts/${name}.md`).then(module =>
        commit(SET_ARTICLE, { article: module.default, id })
      )
    },
  },
})
