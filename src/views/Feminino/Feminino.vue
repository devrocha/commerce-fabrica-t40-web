<script>
import { usePecaStore } from "@/stores/peca"; //importar dentro do componente
import { onMounted, reactive, toRefs } from "@vue/runtime-core";
import { conversion } from "@/utils/index";
import { computed } from "@vue/reactivity";
import Image from "@/components/Image/Image.vue";
import Button from "@/components/Button/Button.vue";
import CardPeca from "@/components/CardPeca/CardPeca.vue";

export default {
  components: {
    Image,
    Button,
    CardPeca,
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
  <v-container>
    <v-row>
      <v-col lg="2" v-for="(peca, index) in pecas" :key="index">
        <CardPeca
          :src="peca.image"
          :title="peca.name"
          :price="peca.price"
          :size="peca.size"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

