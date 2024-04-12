import { createApp } from "vue"
import Vuex from "vuex"

export default new Vuex.Store({
  state: {
    theme: "dark",
    isVisible: false, // Изначальное состояние видимости
  },
  mutations: {
    toggleTheme(state) {
      console.log('Функция вызвана');
      state.theme = state.theme === 'dark' ? 'light' : 'dark'
      console.log('Тема:', state.theme);
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
