import Vue from 'vue'
import Vuex from 'vuex'
import data from './data'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: data.list,
    title: data.title,
  },
  mutations: {},
  actions: {},
})
