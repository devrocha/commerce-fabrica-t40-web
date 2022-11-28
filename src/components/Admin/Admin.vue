<script>
import { usePecaStore } from "@/stores/peca";
import { reactive, toRefs } from "@vue/reactivity";

import CreatePecaModal from "@/views/Pecas/components/modal/CreatePecaModal.vue";

export default {
  components: {
    CreatePecaModal,
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
  <v-layout>
    <v-app-bar color="primary">
      <v-app-bar-title>Administrador</v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer color="secondary" permanent>
      <v-list-nav>
        <v-list-item
          @click="handleClickOpenModal()"
          prepend-icon="mdi-hanger"
          title="Cadastrar Peça"
        ></v-list-item>
        <CreatePecaModal
          :openModal="openModal"
          @closeModal="openModal = $event"
        />
        <v-list-item
          prepend-icon="mdi-account-plus"
          title="Cadastrar Usuário"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-cog"
          title="Configurações Conta"
        ></v-list-item>
      </v-list-nav>
    </v-navigation-drawer>
    <v-main>
      <v-card height="400px"></v-card>
    </v-main>
  </v-layout>
  <!-- <div>
    <v-btn variant="flat" color="error" @click="handleClickOpenModal()">
      Cadastrar Peça
    </v-btn>
    <CreatePecaModal :openModal="openModal" @closeModal="openModal = $event" />
  </div> -->
</template>