import { createApp } from "vue"
import Vuex from "vuex"

export default new Vuex.Store({
  state: {
    theme: "dark",
    isVisible: false, // Изначальное состояние видимости
  },
  mutations: {
    toggleTheme(state) {
      console.log('Toggle theme called');
      state.theme = state.theme === 'dark' ? 'light' : 'light'
      console.log('New theme:', state.theme);
    },
    changeVisibility(state) {
      state.isVisible = !state.isVisible
    },
  },
  actions: {
   toggleTheme({commit}) {
      commit('toggleTheme')
   }
  }
})
