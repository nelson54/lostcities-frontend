import Vue from "vue";
import configureRouter from "./router-configurer";
import App from "./App.vue";

Vue.config.productionTip = false;

let router = configureRouter(Vue);

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
