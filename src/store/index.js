import Vue from "vue";
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

import Vuex from "vuex";
Vue.use(Vuex);

const moduleA = {
  state: {
    count: 3,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
  actions: {
    incrementIfOdd({ state, commit }) {
      if (state.count % 2 === 1) {
        commit("increment");
      }
    },
  },
};

const moduleB = {
  namespaced: true,
  modules: {
    subModule: {
      namespace: true,
      state: { count: 8 },
      mutations: {
        login() {},
      },
      getters: { login() {} },
      actions: { login() {} },
    },
  },
  state: { count: 8 },
  mutations: {},
  getters: {
    someGetter(state, getters, rootState, rootGetters) {
      rootState.count;
      state.count;

      getters.someOtherGetter;
      rootGetters.someOtherGetter;
    },
  },
  actions: {
    someAction({ dispatch, commit, getters, rootGetters }) {
      getters.someGetter;
      rootGetters.someGetter;

      dispatch("someOtherAction");
      dispatch("someOtherAction", null, { root: true });

      commit("someMutation");
      commit("someMutation", null, { root: true });
    },
  },
};

export default new Vuex.Store({
  strict: true,
  modules: {
    a: moduleA,
    b: moduleB,
  },
  state,
  mutations,
  actions,
  getters,
});
