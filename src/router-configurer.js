import VueRouter from "vue-router";

import { meta as applicationViewLayout } from "./components/navigation/ApplicationView"
import { meta as unauthenticatedViewLayout } from "./components/navigation/UnauthenticatedView"

import Login from "./components/views/Login";

export default function configure(vue) {
  vue.use(VueRouter);



  // 2. Define route components
  const Home = { template: '<div>home</div>' }
  const Bar = { template: '<div>bar</div>' }
  const Unicode = { template: '<div>unicode</div>' }
  const Query = { template: '<div>query: "{{ $route.params.q }}"</div>' }

  const router = new VueRouter({
    mode: "history",
    //base: __dirname,
    routes: [
      { path: "/", component: Home, meta: applicationViewLayout },
      { path: "/login", component: Login, meta: unauthenticatedViewLayout },
      { path: "/bar", component: Bar },
      { path: encodeURI("/é"), component: Unicode },
      { path: "/query/:q", component: Query }
    ]
  });
}
