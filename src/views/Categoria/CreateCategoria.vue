<script>
import { useCategoriaStore } from "@/stores/categoria";
import { reactive, toRefs } from "@vue/reactivity";

import SidebarAdmin from "@/components/SidebarAdmin/SidebarAdmin.vue";
export default {
  components: {
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
        gender: data.gender,
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
    <SidebarAdmin></SidebarAdmin>
  </div>
</template>