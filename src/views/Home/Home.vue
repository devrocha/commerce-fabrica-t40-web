<script>
import Button from "@/components/Button/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>

<template>
  <v-container fluid class="pa-0">
    <v-card>
      <v-img src="src/assets/images/hero-banner.jpg" class="fill-height"
        ><h2 class="text-right">Quem tem estilo próprio está sempre na moda</h2>
      </v-img>
    </v-card>

    <v-card elevation="2" outlined class="mx-auto my-10 px-2 pb-2" max-width="250">
      <v-img
        height="250px"
        src="https://img.abercrombie.com/is/image/anf/KIC_144-2069-1446-900_prod1?policy=product-medium&wid=350&hei=438"
      />
      <v-row justify="center">
        <v-card-title>Jaqueta</v-card-title>
        <v-card-actions>
          <Button variant="text" label="Comprar" color="purple" />
          <Button variant="text" label="Favoritar" color="green"/>
        </v-card-actions>
      </v-row>
    </v-card>
  </v-container>
</template>