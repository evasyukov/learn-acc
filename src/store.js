import { createApp } from "vue"
import Vuex from "vuex"

export default new Vuex.Store({
  state: {
    theme: "darkMenu",
    themeMenu: "dark",
    isVisible: false, // Изначальное состояние видимости
  },
  mutations: {
    toggleTheme(state) {
      console.log("Функция вызвана")
      state.theme = state.theme === "dark" ? "light" : "dark"
      state.themeMenu =
        state.themeMenu === "darkMenu" ? "lightMenu" : "darkMenu"
      console.log("Тема:", state.theme)
      console.log("Тема меню:", state.themeMenu)
    },
    changeVisibility(state) {
      state.isVisible = !state.isVisible
    },
  },
  actions: {
    toggleTheme({ commit }) {
      commit("toggleTheme")
    },
  },
})
