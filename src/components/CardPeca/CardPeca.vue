<script>
import Button from "@/components/Button/Button.vue";
import { conversion } from "@/utils/index";
import { useShoppingBag } from "@/stores/shoppingBag.js";

export default {
  components: {
    Button,
  },
  props: {
    src: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      default: 0,
    },
    size: {
      type: String,
      default: "",
    },
    peca: Object
  },

  setup(props) {
    const storeShoppingBag = useShoppingBag();

    const handleClickBuy = () => {
      storeShoppingBag.addPecaInBag(props.peca);
    };

    return {
      conversion,
      handleClickBuy,
    };
  },
};
</script>

<template>
  <v-card
    elevation="2"
    outlined
    class="mx-auto my-10 px-2 pb-2"
    max-width="250"
  >
    <v-img height="250px" :src="src" />
    <v-card-title class="text-uppercase">{{ title }}</v-card-title>
    <v-card-text>
      <v-row class="mx-0 d-flex flex-column">
        <span>
          {{ conversion(price) }}
        </span>
        <span> Tamanho: {{ size }} </span>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <Button
        variant="text"
        label="Comprar"
        color="#AA8BD4"
        @click="handleClickBuy()"
      />
      <Button variant="text" label="Favoritar" color="#46AFA5" />
    </v-card-actions>
  </v-card>
</template>


