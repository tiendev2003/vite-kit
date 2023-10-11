import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "index",
      component: () => import("./../layouts/ClientLayout.vue"),
      children: [
        {
          path: "/",
          name: "home",

          component: () => import("./../views/HomeClient.vue"),
        },
        {
          path: "/blog",
          name: "blog",
          component: () => import("./../views/BlogClient.vue"),
        },
        {
          path: "/contact",
          name: "contact",
          component: () => import("./../views/ContactClient.vue"),
        },
        {
          path: "/about",
          name: "about",
          component: () => import("./../views/AboutClient.vue"),
        },

        {
          path: "/product",
          name: "product",
          component: () => import("./../views/ProductClient.vue"),
        },
        {
          path: "/timeline",
          name: "timeline",
          component: () => import("./../views/TimelineClient.vue"),
        },
      ],
    },
    {
      path: "/admin",
      component: () => import("./../layouts/AdminLayout.vue"),

      children: [
        {
          path: "/admin/",
          name: "dashboard",
          component: () => import("./../views/admin/Dashboard.vue"),
        },
        {
          path: "/admin/information",
          name: "formlayout",
          component: () => import("./../views/admin/InformationUser.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "login",

      component: () => import("./../views/auth/Login.vue"),
    },
    {
      path: "/login/success",

      name: "login-success",
      component: () => import("./../views/auth/LoginSuccess.vue"),
      props: true,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("./../views/NotFound.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});
export default router;
