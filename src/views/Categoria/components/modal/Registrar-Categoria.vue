<script>
import { useCategoriaStore } from "@/stores/categoria";
import { reactive, toRefs } from "@vue/reactivity";

import CreateCategoriaModal from "@/views/Categoria/components/modal/CreateCategoriaModal.vue";

export default {
  components: {
    CreateCategoriaModal,
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
  <div>
    <v-btn variant="flat" color="error" @click="handleClickOpenModalCategoria()">
      Cadastrar Categoria
    </v-btn>
    <CreateCategoriaModal :openModal="openModal" @closeModal="openModal = $event" />
  </div>
</template>