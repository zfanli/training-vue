import Vue from 'vue'
import ga from 'vue-analytics'
import router from '../router'

// Google Analytics support
// Pass router instance for auto track
Vue.use(ga, { id: 'UA-104770482-1', router })
