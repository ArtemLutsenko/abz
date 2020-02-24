import Vue from 'vue'
import Vuex from 'vuex'
import users from "./modules/users"
import userPosition from "./modules/userPositions"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    users,
    userPosition
  }
})
