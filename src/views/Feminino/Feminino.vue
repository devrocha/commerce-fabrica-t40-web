<script>
import { usePecaStore } from "@/stores/peca"; //importar dentro do componente
import { onMounted, reactive, toRefs } from "@vue/runtime-core";
import { conversion } from "@/utils/index";
import Image from "@/components/Image/Image.vue";
import { computed } from "@vue/reactivity";

export default {
  components: {
    Image,
  },

  setup() {
    const data = reactive({
      pecas: [],
      value: 100,
    });

    const store = usePecaStore();

    onMounted(async () => {
      await store.listPecas();
      data.pecas = store.pecas;
      computedLession();
    });

    const computedPecaValue = computed(() => {
      return data.value >= 100 ? "Preço justo" : "Em oferta";
    });

    const computedLession = () => {
      const pecaPrice = data.pecas.filter((peca) => peca.price > 100);
    };

    return {
      ...toRefs(data),
      store,
      conversion,
      computedPecaValue,
    };
  },
};
</script>

<template>
  <div class="d-flex flex-row flex-wrap mb-6 justify-space-between">
    <v-card
      elevation="2"
      outlined
      class="mx-auto"
      max-width="250"
      v-for="(peca, index) in pecas"
      :key="index"
    >
      <v-img
        :src="peca.image"
        alt="Imagens das peças cadastradas"
        height="250px"
      ></v-img>
      <v-row align="center" class="mx-0">
        <v-card-title>{{ peca.name }}</v-card-title>
        <v-card-subtitle>{{ peca.description }}</v-card-subtitle>
        <div class="my-4 text-subtitle-1">R$ {{ conversion(peca.price) }}</div>
      </v-row>
    </v-card>
  </div>
</template>

<!-- <style src="./style.scss" scoped lang="scss" /> -->


<!-- <div class="container">
  <div v-for="(peca, index) in pecas" :key="index" class="container__pecas">
    <Image :source="peca.image" alt="Imagens das peças cadastradas" />
    <p>Descrição: {{ peca.description }}</p>
    <p>Preço: R$ {{ conversion(peca.price) }}</p>
  </div>
</div> -->