import Vue from "vue";
import App from "./App.vue";
import VueTheMask from 'vue-the-mask'
import store from "./store";

Vue.use(VueTheMask)

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
