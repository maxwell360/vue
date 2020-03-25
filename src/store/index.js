import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// State

const userSelectedDarkMode = window.localStorage.getItem
  ("isDarkMode") === "true";

const state = {
  isDarkMode: userSelectedDarkMode
};

// Getters

const getters = {
  isDarkMode(state) {
    return state.isDarkMode;
  }
};

console.log(getters)

// Mutations 

const mutations = {
  toggleDarkMode(state) {
    if (state.isDarkMode === true) {
      state.isDarkMode = false;
      document.body.style.background = "#f0f3f5";
      window.localStorage.setItem("isDarkMode", "false");
    } else
      state.isDarkMode = true;
    document.body.style.background = "#212c4f";
    window.localStorage.setItem("isDarkMode", "true");
  }
}

// Actions <--- asynchrosly

const actions = {
  triggerDarkMode(context) {
    context.commit('toggleDarkMode');
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
