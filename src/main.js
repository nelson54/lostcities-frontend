import Vue from "vue";
import configureRouter from "./router-configurer";
import App from "./App.vue";

Vue.config.productionTip = false;

configureRouter(Vue);

new Vue({
  render: (h) => h(App)
}).$mount("#app");
