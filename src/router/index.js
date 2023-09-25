import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../components/MainLayout.vue"),
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("../views/index.vue"),
        },
        {
          path: "/about",
          name: "about",
          component: () => import("../views/about.vue"),
        },
        {
          path: "/contact",
          name: "contact",
          component: () => import("../views/contact.vue"),
        },
        {
          path: "/product",
          name: "product",
          component: () => import("../views/product.vue"),
        },
        {
          path: "/blog",
          name: "blog",
          component: () => import("../views/blog.vue"),
        },
      ],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
 
    return {
      // could also be
      // el: document.getElementById('main'),
      el:'header',  
       
      display:'sticky',
    }
  },
});

export default router;
