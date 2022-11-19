<script>
// import Button from "@/components/Button/Button.vue";
export default {
  // components: {
  //   Button,
  // },
};
</script>

<template>
  <v-app>
    <v-card>
      <v-img src="src/assets/images/hero-banner.jpg" class="fill-height"
        ><h2 class="text-right">
          Quem tem estilo próprio está sempre na moda
        </h2></v-img
      >
    </v-card>
    <v-card elevation="2" outlined class="mx-auto" max-width="250">
      <v-img
        height="250px"
        src="https://img.abercrombie.com/is/image/anf/KIC_144-2069-1446-900_prod1?policy=product-medium&wid=350&hei=438"
        class="product-thumb"
      ></v-img>
      <v-row align="center" class="mx-0">
        <v-card-title>Jaqueta</v-card-title>
        <v-card-subtitle>Lorem ipsum</v-card-subtitle>
        <v-card-actions>
          <v-btn text>Comprar</v-btn>
          <v-btn text>Favoritar</v-btn>
        </v-card-actions>
      </v-row>
    </v-card>
  </v-app>

  <!-- hero banner -->
  <!-- <div>
    <div class="container">
      <div class="container-title">
        <h1>Quem tem estilo próprio</h1>
        <h1 id="container-title-underlined">está sempre na moda</h1>
      </div>
      <div class="container-btn">
        <Button label="Novidades" type="outline" />

        <Button label="Coleção" type="outline" />

        <Button label="Favoritos" type="outline" />

        <Button label="Outros" type="outline" />
      </div>
    </div> -->
  <!-- produtos -->
  <!-- <section class="product">
      <h2 class="product-category">Mais Vendidos</h2>
      <div class="product-container">
        <div class="product-card">
          <div class="product-image">
            <img src="@/assets/images/favorite.png" class="favorite-tag" />
            <span class="discount-tag">50% off</span>
            <img
              src="https://img.abercrombie.com/is/image/anf/KIC_144-2069-1446-900_prod1?policy=product-medium&wid=350&hei=438"
              class="product-thumb"
            />
            <Button label="Comprar" />
          </div>
          <div class="product-info">
            <h2 class="product-brand">Marca</h2>
            <p class="product-short-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit
            </p>
            <span class="price">R$100</span
            ><span class="actual-price">R%200</span>
          </div>
        </div>
      </div>
    </section>
  </div> -->
</template>

<!-- <style src="./style.scss" scoped lang="scss" /> -->