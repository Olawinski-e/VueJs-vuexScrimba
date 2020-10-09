import Vue from "vue";
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
