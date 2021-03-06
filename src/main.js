import Vue from "vue";
import App from "./App.vue";

import store from "./store";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/scss/index.scss";

import BootstrapVue from "bootstrap-vue";
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");

//store.commit("incrementBy", { amount: 13 });
//console.log(store.state.count);
// console.log(store.getters.getTodoById(1));
// console.log(store.state.a.count);
// store.commit("increment");
// console.log(store.state.a.count);
// console.log(store.state.b.count);

store.commit("b/login");
store.dispatch("b/login");
store.getters["b/login"];
