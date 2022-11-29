<script>
import { usePecaStore } from "@/stores/peca";
import { reactive, toRefs } from "@vue/reactivity";

import CreatePecaModal from "@/views/Pecas/components/modal/CreatePecaModal.vue";
import CreateCategoriaModal from "@/views/Categoria/components/modal/Registrar-Categoria.vue";

export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "Cadastrar Peça", icon: "mdi-hanger", path: "/create" },
        {
          title: "Cadastrar Usuário",
          icon: "mdi-account-star-outline",
          path: "/",
        },
        { title: "Configurações Conta", icon: "mdi-cog-outline", path: "/" },
      ],
    };
  },
  components: {
    CreatePecaModal,
    CreateCategoriaModal,
  },
  setup() {
    const data = reactive({
      openModal: false,
    });

    const handleClickOpenModal = () => {
      data.openModal = !data.openModal;
    };

    const store = usePecaStore();

    const createPeca = async () => {
      const peca = {
        name: data.name,
        description: data.description,
      };
      await store.createPeca(peca);
    };

    return {
      ...toRefs(data),
      handleClickOpenModal,
    };
  },
};
</script>

<template>
  <div>
    <v-app-bar color="primary">
      <v-app-bar-title>Administrador</v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer color="secondary" permanent>
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.path"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <router-link to="/"><v-btn block> Logout </v-btn></router-link>
        </div>
      </template>
    </v-navigation-drawer>
    <v-main>
      <v-card></v-card>
    </v-main>
  </div>
  <!-- <div>
    <v-btn variant="flat" color="error" @click="handleClickOpenModal()">
      Cadastrar Peça
    </v-btn>
    <CreatePecaModal :openModal="openModal" @closeModal="openModal = $event" />
  </div> -->
</template>