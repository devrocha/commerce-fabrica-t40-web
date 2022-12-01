<script>
import { usePecaStore } from "@/stores/peca";
import { reactive, toRefs } from "@vue/reactivity";

import CreatePecaModal from "@/views/Pecas/components/modal/CreatePecaModal.vue";
import SidebarAdmin from "@/components/SidebarAdmin/SidebarAdmin.vue";

export default {
  components: {
    CreatePecaModal,
    SidebarAdmin,
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
  <SidebarAdmin></SidebarAdmin>
  <div>
    <v-btn variant="flat" color="error" @click="handleClickOpenModal()">
      Cadastrar Peça
    </v-btn>
    <CreatePecaModal :openModal="openModal" @closeModal="openModal = $event" />
  </div>
  <router-view name="Admin"></router-view>
  <router-view></router-view>
</template>