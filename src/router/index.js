import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home/Home.vue";
import Feminino from "@/views/Feminino/Feminino.vue";
import Masculino from "@/views/Masculino/Masculino.vue";
import ShoppingBag from "@/views/Shopping-Bag/Shopping-Bag.vue";
import Email from "@/views/Email/Email.vue";
import Whatsapp from "@/views/Whatsapp/Whatsapp.vue";
import Instagram from "@/views/Instagram/Instagram.vue";
import Facebook from "@/views/Facebook/Facebook.vue";
import RegistrarPeca from "@/views/Registrar-Peca/Registrar-Peca.vue";
import SidebarAdmin from "../components/SidebarAdmin/SidebarAdmin.vue";
import Login from "@/views/Login/Login.vue";
import CreateCategoria from "@/views/Categoria/CreateCategoria.vue";
import Admin from "@/views/Admin/Admin.vue";

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
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/admin",
      name: "Admin",
      component: Admin,
      children: [
        {
          path: "SidebarAdmin",
          component: SidebarAdmin,
        },
      ],
    },

    {
      path: "/registrar",
      name: "RegistrarPeca",
      component: RegistrarPeca,
      children: [
        {
          path: "SidebarAdmin",
          component: SidebarAdmin,
        },
      ],
    },

    {
      path: "/createCategoria",
      name: "CreateCategoria",
      component: CreateCategoria,
      children: [
        {
          path: "SidebarAdmin",
          component: SidebarAdmin,
        },
      ],
    },
  ],
});

export default router;
