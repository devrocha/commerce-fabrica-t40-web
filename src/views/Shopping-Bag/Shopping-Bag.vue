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
  <v-container v-for="(peca, index) in pecas" :key="index">
    <v-list>
      <v-list-tile-avatar>
        <v-img :src="peca.image" height="100px"></v-img>
      </v-list-tile-avatar>
      <v-list-tile-content>
        <v-list-tile-title>{{ peca.name }}</v-list-tile-title>
      </v-list-tile-content>
      <v-list-tile>R$ {{ conversion(peca.price) }}</v-list-tile>
      <v-list-tile-action>
        <v-text-field
          label="Quantidade"
          v-model="numberValue"
          hide-details
          single-line
          type="number"
        />
      </v-list-tile-action>
      <v-list-tile-action>
        <v-btn><img src="@/assets/images/trash.png" /></v-btn>
      </v-list-tile-action>
      <v-list-tile-action>
        <v-btn
          ><img src="@/assets/images/cesta.png" width="20" height="20"
        /></v-btn>
      </v-list-tile-action>
    </v-list>
  </v-container>
  <v-container>
    <v-btn color="success" larger style="float: right">Pagamento</v-btn>
  </v-container>
</template>