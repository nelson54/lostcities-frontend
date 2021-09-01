import VueRouter from "vue-router";

export function configure(vue) {
  vue.use(VueRouter);
  const router = new VueRouter({
    mode: "history",
    base: __dirname,
    routes: [
      { path: "/", component: Home },
      { path: "/foo", component: Foo },
      { path: "/bar", component: Bar },
      { path: encodeURI("/é"), component: Unicode },
      { path: "/query/:q", component: Query }
    ]
  });
}
