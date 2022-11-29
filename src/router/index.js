import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home/Home.vue";
import Feminino from "@/views/Feminino/Feminino.vue";
import Masculino from "@/views/Masculino/Masculino.vue";
// import Infantil from "@/views/Infantil/Infantil.vue";
import Outlet from "@/views/Outlet/Outlet.vue";
import ShoppingBag from "@/views/Shopping-Bag/Shopping-Bag.vue";
import Email from "@/views/Email/Email.vue";
import Whatsapp from "@/views/Whatsapp/Whatsapp.vue";
import Instagram from "@/views/Instagram/Instagram.vue";
import Facebook from "@/views/Facebook/Facebook.vue";
import RegistrarPeca from "@/views/Registrar-Peca/Registrar-Peca.vue";
import Admin from "@/components/SideNavigation/SideNav.vue";
import Login from "@/views/Login/Login.vue";
import Create from "@/views/Admin/CreatePeca.vue";

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
      path: "/admin",
      name: "Admin",
      component: Admin,
    },

    {
      path: "/outlet",
      name: "Outlet",
      component: Outlet,
    },

    {
      path: "/shoppingBag",
      name: "ShoppingBag",
      component: ShoppingBag,
    },

    {
      path: "/email",
      name: "Email",
      component: Email,
    },

    {
      path: "/whatsapp",
      name: "Whatsapp",
      component: Whatsapp,
    },

    {
      path: "/instagram",
      name: "Instagram",
      component: Instagram,
    },

    {
      path: "/facebook",
      name: "Facebook",
      component: Facebook,
    },
    {
      path: "/registrar",
      name: "RegistrarPeca",
      component: RegistrarPeca,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/create",
      name: "CreatePeca",
      components: {
        default: Create,
        sidebar: Admin,
      },
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});

export default router;
