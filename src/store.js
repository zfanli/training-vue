import Vue from 'vue'
import Vuex from 'vuex'
import data from './data'
import {
  ACTION_FETCH_POST,
  MUTATION_SET_POST,
  MUTATION_SHOW_MORE_POSTS,
} from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    /**
     * An overview of all posts.
     */
    list: data,
    /**
     * Title shows on the navigation.
     */
    title: 'richard zg',
    /**
     * Display size on homepage.
     */
    size: 15,
    /**
     * Load size for every times load more button is clicked.
     */
    loadSize: 10,
  },
  getters: {
    /**
     * All post ids. Order by time desc.
     * @param {*} state
     */
    listIds(state) {
      return Object.keys(state.list).sort((x, y) => x > y)
    },
    /**
     * Posts to display on homepage, limit by `state.size`.
     * @param {*} state
     * @param {*} getters
     */
    listArray(state, getters) {
      return getters.listIds.slice(0, state.size).map(id => state.list[id])
    },
    /**
     * The true length of the list(array) that contains all posts.
     * @param {*} getters
     */
    length(_, getters) {
      return getters.listIds ? getters.listIds.length : 0
    },
    /**
     * A flag shows there has posts can be display on the homepage.
     * @param {*} getters
     */
    hasPosts(_, getters) {
      return getters.length > 0
    },
    /**
     * A flag shows there are more posts haven't be displayed.
     * @param {*} state
     * @param {*} getters
     */
    hasMorePosts(state, getters) {
      return state.size < getters.length
    },
  },
  mutations: {
    // Set new post body
    [MUTATION_SET_POST](state, { body, id }) {
      state.list[id].body = body
    },
    // Increase `state.size` by given number
    [MUTATION_SHOW_MORE_POSTS](state) {
      state.size += state.loadSize
    },
  },
  actions: {
    // Perform a async action for dynamic import a md file.
    // The name is needed, point to the real file name
    // The id is for identify the post
    [ACTION_FETCH_POST]({ commit }, { name, id }) {
      // Dynamic import markdown file and set to state.body
      // Notice: MUST minify variable control of import path,
      // because webpack will pack all files that could be imported.
      // For example, the path defined below(`./_posts/${name}.md`)
      // will make webpack to pack all files that match `./_posts/*.md`.
      import(/* webpackMode: "lazy" */ `./_posts/${name}.md`).then(module =>
        commit(MUTATION_SET_POST, { body: module.default, id })
      )
    },
  },
})
