<script>
import Button from "@/components/Button/Button.vue";
import { conversion } from "@/utils/index";

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
  },

  setup() {
    return {
      conversion,
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
      <Button variant="text" label="Comprar" color="#AA8BD4" />
      <Button variant="text" label="Favoritar" color="#46AFA5" />
    </v-card-actions>
  </v-card>
</template>


