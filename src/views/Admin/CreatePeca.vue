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
  <v-navigation-drawer v-model="drawer"></v-navigation-drawer>
  <div>
    <v-btn variant="flat" color="error" @click="handleClickOpenModal()">
      Cadastrar Peça
    </v-btn>
    <CreatePecaModal :openModal="openModal" @closeModal="openModal = $event" />
  </div>
</template>