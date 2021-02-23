import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title:'pop',
   
  },
  mutations: {
    change(state,palyload){
      state.title = palyload.title
    },
  },
  actions: {
  },
  modules: {
  }
})
