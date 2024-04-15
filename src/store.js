import { createApp } from "vue"
import Vuex from "vuex"

export default new Vuex.Store({
  state: {
    theme: "darkMenu",
    themeMenu: "dark", // изначальные состояния фона сайта и меню слева
    isVisible: false, // изначальное состояние видимости
  },
  mutations: {
    toggleTheme(state) {
      console.log("Функция вызвана")
      state.theme = state.theme === "dark" ? "light" : "dark"
      state.themeMenu = state.themeMenu === "darkMenu" ? "lightMenu" : "darkMenu"
    },
    changeVisibility(state) {
      state.isVisible = !state.isVisible  // изменение видимости меню
    },
  },
  actions: {
    toggleTheme({ commit }) {
      commit("toggleTheme")
    },
  },
})
