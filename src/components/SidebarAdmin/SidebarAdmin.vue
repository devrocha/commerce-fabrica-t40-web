<script>
import { usePecaStore } from "@/stores/peca";
import { reactive, toRefs } from "@vue/reactivity";
import { useCategoriaStore } from "@/stores/categoria.js";
import { useLoginStore } from "@/stores/login.js";
import { useRouter } from "vue-router";

export default {
  setup() {
    const data = reactive({
      openModal: false,
      drawer: true,
      items: [
        { title: "Cadastrar Peça", icon: "mdi-hanger", path: "/registrar" },
        {
          title: "Cadastrar Categoria",
          icon: "mdi-shape",
          path: "/createCategoria",
        },
        {
          title: "Cadastrar Usuário",
          icon: "mdi-account-star-outline",
          path: "/",
        },
        {
          title: "Configurações Conta",
          icon: "mdi-cog-outline",
          path: "/",
        },
      ],
    });

    const handleClickOpenModal = () => {
      data.openModal = !data.openModal;
    };

    const store = usePecaStore();
    const storeCategoria = useCategoriaStore();
    const storeLogin = useLoginStore();
    const router = useRouter();

    const createPeca = async () => {
      const peca = {
        name: data.name,
        description: data.description,
      };
      await store.createPeca(peca);
    };

    const handleClickOpenModalCategoria = () => {
      data.openModal = !data.openModal;
    };

    const createCategoria = async () => {
      const categoria = {
        type: data.type,
        gender: data.gender,
      };
      await storeCategoria.createCategoria(categoria);
    };

    const handleLogout = () => {
      storeLogin.logout();
      router.push("/login");
    };

    return {
      ...toRefs(data),
      handleClickOpenModal,
      handleClickOpenModalCategoria,
      handleLogout,
    };
  },
};
</script>

<template>
  <div>
    <v-app-bar color="primary">
      <router-link to="/admin" style="text-decoration: none; color: inherit">
        <v-app-bar-title>Administrador</v-app-bar-title>
      </router-link>
    </v-app-bar>
    <v-navigation-drawer color="teal" permanent>
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.path"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn @click="handleLogout()" block> Logout </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-main>
      <v-card></v-card>
    </v-main>
  </div>
</template>