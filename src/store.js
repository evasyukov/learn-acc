import {createApp} from 'vue';
import Vuex from 'vuex';


export default new Vuex.Store({
 state: {
    isVisible: false, // Изначальное состояние видимости
 },
 mutations: {
    toggleVisibility(state) {
      state.isVisible = !state.isVisible;
    },
 },
});
