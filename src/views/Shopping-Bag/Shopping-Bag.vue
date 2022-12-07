<script>
import { useShoppingBag } from "@/stores/shoppingBag.js"; //importar dentro do componente
import { onMounted, reactive, toRefs, watch } from "@vue/runtime-core";
import { conversion } from "@/utils/index";
import Image from "@/components/Image/Image.vue";

export default {
  components: {
    Image,
  },

  setup() {
    const data = reactive({
      pecasBag: [],
      value: 100,
    });

    onMounted(() => {
      data.pecasBag = store.shoppingBag;
    });

    const store = useShoppingBag();

    const handleRemovePeca = (index) => {
      store.removePecaInBag(index)
    }

    watch(
      () => store.shoppingBag,
      (value) => (data.pecasBag = value)
    );

    return {
      ...toRefs(data),
      store,
      conversion,
      handleRemovePeca
    };
  },
};
</script>

<template>
  <h2 class="display-2 mb-4">Carrinho</h2>
  <div>
    <v-row no-gutters>
      <v-col
        cols="12"
        v-for="(pecaBag, index) in pecasBag"
        :key="index"
        class="mb-2"
      >
        <v-card class="pa-3">
          <div class="d-flex justify-space-between align-center">
            <div>
              <v-card-title>
                {{ pecaBag.name }}
              </v-card-title>
            </div>
            <v-img :src="pecaBag.image" height="50px"></v-img>
            <div>
              <v-card-subtitle
                >R$ {{ conversion(pecaBag.price) }}</v-card-subtitle
              >
            </div>

            <div>
              <v-card-action>
                <v-btn> + </v-btn>
                <v-btn> - </v-btn>
              </v-card-action>
            </div>
            <v-card-action>
              <v-btn @click="handleRemovePeca(index)"><img src="@/assets/images/trash.png" /></v-btn>
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