<script>
import Button from "@/components/Button/Button.vue";
import Card from "@/components/Card/Card.vue";

export default {
  components: {
    Button,
    Card,
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
    <Card
      src="https://img.abercrombie.com/is/image/anf/KIC_144-2069-1446-900_prod1?policy=product-medium&wid=350&hei=438"
      label="jaqueta"
    />
  </v-container>
</template>