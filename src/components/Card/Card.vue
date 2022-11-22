<script>
import Button from "@/components/Button/Button.vue";

export default {
  components: {
    Button,
  },
  props: {
    src: String,
    label: String,
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
    <v-row justify="center">
      <v-card-title class="text-uppercase">{{ label }}</v-card-title>
      <v-card-actions>
        <Button variant="text" label="Comprar" color="#AA8BD4" />
        <Button variant="text" label="Favoritar" color="#46AFA5" />
      </v-card-actions>
    </v-row>
  </v-card>
</template>


