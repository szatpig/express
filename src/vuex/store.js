import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import show from './modules/show'
import title from './modules/title'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { user, show, title }
})
