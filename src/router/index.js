import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
// import About from "../views/About.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/About.vue")
    },
    {
      path: "/test",
      name: "test",
      component: () => import("../views/SearchResult.vue")
    },
    {
      path: "/details/:id",
      name: "details",
      component: () => import("../views/Details.vue")
    }
  ],
});

export default router;
