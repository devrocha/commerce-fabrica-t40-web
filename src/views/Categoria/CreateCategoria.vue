<script>
import { useCategoriaStore } from "@/stores/categoria";
import { reactive, toRefs } from "@vue/reactivity";

import CreateCategoriaModal from "@/views/Categoria/components/modal/CreateCategoriaModal.vue";
import SidebarAdmin from "@/components/SidebarAdmin/SidebarAdmin.vue";
export default {
  components: {
    CreateCategoriaModal,
    SidebarAdmin,
  },
  setup() {
    const data = reactive({
      openModal: false,
    });

    const handleClickOpenModalCategoria = () => {
      data.openModal = !data.openModal;
    };

    const storeCat = useCategoriaStore();

    const createCategoria = async () => {
      const categoria = {
        type: data.type,
      };
      await storeCat.createCategoria(categoria);
    };

    return {
      ...toRefs(data),
      handleClickOpenModalCategoria,
    };
  },
};
</script>

<template>
  <SidebarAdmin></SidebarAdmin>
  <div>
    <v-navigation-drawer v-model="drawer"></v-navigation-drawer>
    <div>
      <v-btn
        variant="flat"
        color="error"
        @click="handleClickOpenModalCategoria()"
      >
        Cadastrar Categoria
      </v-btn>
      <CreateCategoriaModal
        :openModal="openModal"
        @closeModal="openModal = $event"
      />
    </div>
  </div>
</template>