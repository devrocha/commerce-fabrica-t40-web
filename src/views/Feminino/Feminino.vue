<template>
  <div v-for="(peca, index) in pecas" :key="index">
    <span>
      {{ peca.description }}
    </span>
  </div>
</template>

<script>
import { usePecaStore } from "@/stores/peca"; //importar dentro do componente
import { onMounted, reactive, toRefs } from "@vue/runtime-core";

export default {
  setup() {
    const data = reactive({
      pecas: [],
    });
    const store = usePecaStore();

    onMounted(async () => {
      await store.listPecas();
      data.pecas = store.pecas;
    });

    return {
      ...toRefs(data),
      store,
    };
  },
};
</script>

<style src="./style.scss" scoped lang="scss" />