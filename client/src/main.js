import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ToDo from './components/Search_list.vue'


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  ToDo
}).$mount("#app");
