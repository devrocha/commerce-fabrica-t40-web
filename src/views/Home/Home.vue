<script>
import Button from "@/components/Button/Button.vue";
import CardPeca from "@/components/CardPeca/CardPeca.vue";
import { usePecaStore } from "@/stores/peca";
import { reactive, toRefs } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

export default {
  components: {
    Button,
    CardPeca,
  },

  setup() {
    const data = reactive({
      pecas: [],
      page: 1,
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

<template>
  <v-container fluid class="pa-0">
    <!-- hero banner -->
    <v-card max-height="700">
      <v-img src="src/assets/images/hero-banner.jpg" class="fill-height"
        ><v-card-title
          class="
            text-right text-h2
            py-10
            text-uppercase
            font-weight-light
            my-15
          "
          style="color: #494d5f"
        >
          Quem tem estilo próprio
        </v-card-title>
        <v-card-title
          class="text-right text-h2 text-uppercase font-weight-light"
          style="color: #494d5f"
        >
          está sempre na moda
        </v-card-title>
      </v-img>
    </v-card>
    <!-- pecas -->
    <v-row>
      <v-col lg="2" v-for="(peca, index) in pecas" :key="index">
        <CardPeca
          :peca="peca"
          :src="peca.image"
          :title="peca.name"
          :price="peca.price"
          :size="peca.size"
        />
      </v-col>
    </v-row>
  </v-container>
  <div class="text-center">
    <v-pagination v-model="page" :length="6"></v-pagination>
  </div>
</template>