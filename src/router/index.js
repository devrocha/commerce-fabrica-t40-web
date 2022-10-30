import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/Home/Home.vue'
import Feminino from '@/views/Feminino/Feminino.vue'
import Masculino from '@/views/Masculino/Masculino.vue'
import Infantil from '@/views/Infantil/Infantil.vue'
import Outlet from '@/views/Outlet/Outlet.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },

    {
      path: "/feminino",
      name: "Feminino",
      component: Feminino,
    },

    {
      path: "/masculino",
      name: "Masculino",
      component: Masculino,
    },

    {
      path: "/infantil",
      name: "Infantil",
      component: Infantil,
    },

    {
      path: "/outlet",
      name: "Outlet",
      component: Outlet,
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});

export default router;
