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
  <h2 class="display-2 mb-4">Carrinho</h2>
  <div>
    <v-row no-gutters>
      <v-col cols="12" v-for="(peca, index) in pecas" :key="index" class="mb-2">
        <v-card class="pa-3">
          <div class="d-flex justify-space-between align-center">
            <div>
              <v-card-title>
                {{ peca.name }}
              </v-card-title>
              <v-card-subtitle>R$ {{ conversion(peca.price) }}</v-card-subtitle>
              <v-img :src="peca.image" height="50px"></v-img>
            </div>
            <div>
              <v-card-action>
                <v-btn> + </v-btn>
                <v-btn> - </v-btn>
              </v-card-action>
            </div>
            <v-card-action>
              <v-btn><img src="@/assets/images/trash.png" /></v-btn>
            </v-card-action>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <div class="d-flex justify-start mb-6">
      <h3 class="ma-6">Total</h3>
      <span>R$</span>
      <v-btn color="success" larger style="float: right">Pagamento</v-btn>
    </div>
  </div>
</template>