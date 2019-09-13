import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import PageNotFound from "./views/PageNotFound.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL || "/",
  scrollBehavior(to, from, savedPosition) {
    return new Promise(resolve => {
      setTimeout(() => {
        if (to.path === from.path && to.hash) {
          resolve({ selector: to.hash });
        }
        let pos = savedPosition || { x: 0, y: 0 };
        resolve(pos);
      }, 100);
    });
  },

  routes: [
    {
      path: "/:locale?/code-of-conduct",
      props: true,
      name: "coc",
      // route level code-splitting
      // this generates a separate chunk (code-of-conduct.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "pages" */ "./views/Page.vue")
    },
    {
      path: "/:locale?/contact",
      props: true,
      name: "contact",
      // route level code-splitting
      // this generates a separate chunk (contact.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "contact" */ "./views/Contact.vue")
    },
    {
      path: "/:locale?/",
      props: true,
      name: "home",
      component: Home
    },
    { path: "/:locale?/*", props: true, component: PageNotFound }
  ]
});
